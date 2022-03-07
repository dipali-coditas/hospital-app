import express from 'express';
import { connectToMongo } from './connections/connect.mongo';
import { registerMiddlewares } from './routes';

export const startServer = async () => {
    try {
        const app = express();

        await connectToMongo();
        registerMiddlewares(app);

        const { PORT } = process.env;
        app.listen(
            PORT,
            () => console.log(`SERVER STARTED ON PORT ${PORT}`)
        )
    } catch (e) {
        console.log('FAILED TO START SERVER');
        process.exit(1);
    }
}