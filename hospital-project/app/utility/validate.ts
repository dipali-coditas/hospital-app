import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return next({ statusCode: 400, message: 'BAD REQUESR' });
    }

    next();
} 