import { Route } from './routes.types.js';
import ProductRouter from '../modules/products/products.routes.js';

export const routes = [
    new Route('/product', ProductRouter)
]