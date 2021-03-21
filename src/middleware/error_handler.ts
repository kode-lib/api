/* eslint-disable @typescript-eslint/no-unused-vars */
import { HTTPException } from "../exception";
import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function errorHandler(error: HTTPException, req: Request, res: Response, next: NextFunction) {
    res.status(error.statusCode).json(error);
}