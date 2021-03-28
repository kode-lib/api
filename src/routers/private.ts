import { Router, Request, Response } from 'express';

import { authorize } from "../middleware/auth";

export const router = Router();

router.get("/", authorize, (_: Request, res: Response) => {
    res.send("Private area");
});