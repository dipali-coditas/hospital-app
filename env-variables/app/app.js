import express from "express";
import { registerRoutes } from "./modules/routes/routes";

export const startServer = () => {
    const app = express();

    registerRoutes(app);

    app.listen(
        process.env.PORT,
        () => console.log(`SERVER STARTED ON PORT ${process.env.PORT}`)
    )
}