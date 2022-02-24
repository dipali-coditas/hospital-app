import { Route } from "./routes.types";
import UserRouter from '../modules/user/user.routes';

export const routes: Route[] = [
    new Route("/user", UserRouter)
];