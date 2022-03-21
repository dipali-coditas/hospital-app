
import { Request, Response, NextFunction } from "express"

export const permit = (permitRoles: string[]) => {

    return (req: Request, res: Response, next: NextFunction) => {

        const { roles } = res.locals.user;
        if (roles.some((item: string) => permitRoles.includes(item))) {
            return next();
        }

        next({ message: "not permited" });
    }
}