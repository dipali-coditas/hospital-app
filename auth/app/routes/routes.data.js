import { Route } from "./routes.types.js";
import UserRouter from '../modules/user/user.routes.js';

export const routes = [
    new Route("/user", UserRouter)
]