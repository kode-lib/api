import { Router, Request, Response } from "express";

import { Octokit } from "@octokit/rest";

export const router = Router();

router.get("/app/latest", async (req: Request, res: Response) => {
    const octokit = new Octokit();
    const release = await octokit.repos.getLatestRelease({
        owner: "marghidanu",
        repo: "werk"
    });

    const assets = release.data.assets.filter(value => value.name === "werk-linux-x64");
    if (!assets.length)
        return res.sendStatus(404);

    res.send(assets[0].browser_download_url);
});