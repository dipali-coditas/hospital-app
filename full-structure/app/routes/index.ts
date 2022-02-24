import { Application, json } from "express"
import helmet from "helmet";

import { routes } from "./routes.data";

export const registerRoutes = (app: Application) => {
    app.use(json());
    app.use(helmet());

    for(let route of routes) {
        app.use(route.path, route.router);
    }
}