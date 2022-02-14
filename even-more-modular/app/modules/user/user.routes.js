import { Router } from "express";
import UserDB from './user.schema.js';

const router = Router();


router.post("/", (req, res, next) => {
    res.send('user post api');
});

router.get("/", (req, res, next) => {
    try {
        const result = UserDB.getAll();
        // success result
        // by default the statusCode will be
        // 200 -> success
        res.send(result);
    } catch (e) {
        // not the success result
        // we set the statusCode to some error code
        // 500 -> internal server error
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});

router.put("/", (req, res, next) => {
    res.send('user put api');
});

router.delete("/", (req, res, next) => {
    res.send('user delete api');
});

export default router;