import { HTTPException } from "../exception";
import { Request, Response, NextFunction } from "express";

export function errorHandler(error: HTTPException, req: Request, res: Response, next: NextFunction) {
    res.status(error.statusCode).json(error);
}