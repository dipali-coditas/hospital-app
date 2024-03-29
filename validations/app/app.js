import express from "express";
import { registerRoutes } from './routes/index.js';

export const startServer = () => {
    const app = express();

    registerRoutes(app);

    const { PORT } = process.env;
    app.listen(
        PORT,
        () => console.log(`SERVER STARTED ON PORT ${PORT}`)
    );
}