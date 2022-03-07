import { Application, json, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { ResponseHandler } from "../utility/response-handler";
import { routes } from "./routes.data";


export const registerMiddlewares = (app: Application) => {
    app.use(json());
    app.use(helmet());

    for(let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}