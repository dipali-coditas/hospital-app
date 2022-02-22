import { json } from "express";
import helmet from "helmet";
import { authorize } from "../utility/authorize.js";
import { routes, excludedPaths } from "./routes.data.js";

export const registerRoutes = (app) => {
    app.use(json());
    app.use(helmet());

    app.use(authorize(excludedPaths));

    for(let route of routes) {
        app.use(route.path, route.router);
    }
}