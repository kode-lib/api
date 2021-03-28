/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "express-jwt";

import { HTTPException } from "../exceptions";

interface IErrorResponse {
    statusCode: number;
    reason: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.error(error);

    let result: IErrorResponse;
    if (error instanceof HTTPException) {
        result = { statusCode: error.statusCode, reason: error.message };
    } else if (error instanceof UnauthorizedError) {
        result = { statusCode: error.status, reason: error.message }
    } else {
        result = { statusCode: 500, reason: error.message }
    }

    return res.status(result.statusCode).json(result);
}