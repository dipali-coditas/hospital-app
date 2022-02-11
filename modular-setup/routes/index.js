import { json } from "express";
import UserRouter from '../modules/users/users.routes.js';
import ProductRouter from '../modules/products/products.routes.js';

export const registerRoutes = (app) => {
    app.use(json());

    // tell app to use these routers
    // when incoming request is localhost:3000/user/any/such/url
    // it will use the user router
    app.use('/user', UserRouter);

    // when incoming request is localhost:3000/product/any/such/url
    // it will use the product router
    app.use('/product', ProductRouter);
}