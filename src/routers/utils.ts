import { Router, Request, Response } from "express";

import { Octokit } from "@octokit/rest";

import { HTTPException } from "../exception";

export const router = Router();

router.get("/app/latest", async (req: Request, res: Response) => {
    const octokit = new Octokit();
    const release = await octokit.repos.getLatestRelease({
        owner: "marghidanu",
        repo: "werk"
    });

    const assets = release.data.assets.filter(value => value.name === "werk-linux-x64");
    if (!assets.length)
        throw new HTTPException(404, "Asset not found!");

    res.send(assets[0].browser_download_url);
});