import { Application, json, Request, Response, NextFunction } from "express"
import helmet from "helmet";
import { ResponseHandler } from "../utility/response.types";

import { routes } from "./routes.data";

export const registerRoutes = (app: Application) => {
    app.use(json());
    app.use(helmet());

    for(let route of routes) {
        app.use(route.path, route.router);
    }

    // error handling middleware
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    });
}