import { json } from "express";
import helmet from "helmet";
import { routes } from './routes.data.js';

export const registerRoutes = (app) => {

    app.use(helmet());
    app.use(json());

    for(let route of routes) {
        app.use(route.path, route.router);
    }

}