import { Router, Request, Response, NextFunction } from "express";
import { Octokit } from "@octokit/rest";

import { HTTPNotFoundException } from "../exception";

export const router = Router();

router.get("/app/:appName/latest", async (req: Request, res: Response, next: NextFunction) => {
    const octokit = new Octokit();

    try {
        const release = await octokit.repos.getLatestRelease({
            owner: "marghidanu",
            repo: req.params.appName,
        });

        const assets = release.data.assets.filter(value => value.name === "werk-linux-x64");
        if (!assets.length)
            next(new HTTPNotFoundException("Asset not found!"));

        res.send(assets[0].browser_download_url);
    } catch (e) {
        next(new HTTPNotFoundException("Release not found!"));
    }
});