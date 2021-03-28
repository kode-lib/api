import { Router, Request, Response } from "express";

export const router = Router();

router.get("/", (_: Request, res: Response) => {
    res.json({
        name: process.env.npm_package_name,
        version: process.env.npm_package_version,
    });
});

router.get("/health", (_: Request, res: Response) => {
    res.json({ status: "OK" });
});