import { Router } from "express";
import UserDB from './user.schema.js';
import { CreateUserValidator } from './user.validations.js'

const router = Router();

// validate incoming data
// handling errors

router.post("/", CreateUserValidator(), (req, res, next) => {
    try {
        const result = UserDB.save(req.body);
        res.send({ message: "USER CREATED", data: result });
    } catch (e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});


// validate the get request
router.get("/", (req, res, next) => {
    try {
        const result = UserDB.getAll();
        // success result
        // by default the statusCode will be
        // 200 -> success
        res.send({ message: "FETCHED", data: result });
    } catch (e) {
        // not the success result
        // we set the statusCode to some error code
        // 500 -> internal server error
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});

// validate the put request
router.put("/", (req, res, next) => {
    try {
        UserDB.updateOne(req.body);
        res.send({ message: "USER UPDATED", data: req.body });
    } catch (e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});

// validate the delete request
router.delete("/:id", (req, res, next) => {
    try {
        const { id } = req.params;
        UserDB.deleteOne(id);
        res.send({ message: "USER DELETED", data: null });
    } catch (e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});

export default router;