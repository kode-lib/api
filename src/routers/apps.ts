import { Router, Request, Response, NextFunction } from 'express';
import { Octokit } from '@octokit/rest';

import { NotFoundException } from '../exceptions';

export const router = Router();

const octokit = new Octokit();

router.get(
    '/werk/latest/url',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const release = await octokit.repos.getLatestRelease({
                owner: 'marghidanu',
                repo: 'werk',
            });

            const assets = release.data.assets.filter(
                (value) => value.name === 'werk-linux-x64',
            );
            if (!assets.length) next(new NotFoundException('Asset not found!'));

            res.send(assets[0].browser_download_url);
        } catch (e) {
            next(new NotFoundException('Cannot retrieve release!'));
        }
    },
);

router.get(
    '/werk/latest/version',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const release = await octokit.repos.getLatestRelease({
                owner: 'marghidanu',
                repo: 'werk',
            });

            res.send(release.data.tag_name);
        } catch (e) {
            next(new NotFoundException('Cannot retrieve release!'));
        }
    },
);
