import cors from "cors";
import { Application, json, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { authorize } from "../utility/authorize";
import { ResponseHandler } from "../utility/response-handler";
import { excludedPaths, router } from "./routes.data";


export const registerMiddlewares = (app: Application) => {
    app.use(cors());
    app.use(json());
    app.use(helmet());

    app.use(authorize(excludedPaths));

    for(let route of router) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(
            new ResponseHandler(null, err)
        );
    })
}