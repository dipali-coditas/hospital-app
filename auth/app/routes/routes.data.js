import { Route } from "./routes.types.js";
import UserRouter from '../modules/user/user.routes.js';

export const routes = [
    new Route("/user", UserRouter)
]

export const excludedPaths = [
    { method: 'POST', route: '/user/login' },
    { method: 'POST', route: '/user' }
];