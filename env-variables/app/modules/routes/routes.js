import { json } from "express";

const jsonMiddleware = json(); // json returns a middleware function
// jsonMiddleware ==> middleware function accepts req, res, next
// it converts the body part of the incoming request into a json
// this converted body will now be available in the next middlware's req.body

export const registerRoutes = (app) => {

    console.log(process.env.DB_CONNECTION);

    app.use(jsonMiddleware);
    // app.use(json());
}