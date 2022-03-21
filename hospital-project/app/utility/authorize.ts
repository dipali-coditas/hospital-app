import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";
import { IExcludePath } from "../routes/routes.types"

export const authorize = (excludedPaths: IExcludePath[]) => {
    return (
        req: Request, 
        res: Response, 
        next: NextFunction
    ) => {
        try {
            if(excludedPaths.find(e => 
                e.method === req.method &&
                e.path   === req.url
            )) {
                return next();
            }
    
            const { SECRET_KEY } = process.env;
            const payload = verify(req.headers.authorization || '', SECRET_KEY || '');
    
            res.locals['user'] = payload;
            // req.user = payload;
            next();
        } catch (e) {
            next({ statusCode: 401, message: 'UNAUTHORIZED' });
        }
    }
}