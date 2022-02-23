import { Route } from "./routes.types.js";
import UserRouter from '../modules/user/user.routes.js';
import ProductRouter from '../modules/products/products.routes.js';

export const routes = [
    new Route("/user", UserRouter),
    new Route("/product", ProductRouter)
]

export const excludedPaths = [
    { method: 'POST', route: '/user/login' },
    { method: 'POST', route: '/user' }
];