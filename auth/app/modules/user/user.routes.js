import { Router } from "express";
import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

import User from "./user.schema.js";
import { CreateUserValidator, LoginUserValidator } from "./user.validations.js";

const router = Router();

// register user endpoint (CREATE a user)
// name, email, password
router.post("/", CreateUserValidator, (req, res, next) => {
    try {
        const result = User.create(req.body);
        res.send({ message: 'User Created', data: result });
    } catch(e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
})


// login user endpoint (validate if user exists, and create a token)
router.post("/login", LoginUserValidator, (req, res, next) => {
    try {
        // 1. user exists or not
        const { email, password } = req.body;
        const userRecord = User.findOne(email, password);

        if(!userRecord) {
            return res.status(404).send({ message: 'INVALID CREDENTIALS' });
        }

        // 2. generate token
        const { SECRET_KEY } = process.env;
        const token = sign(userRecord, SECRET_KEY);

        res.send({ message: "LOG IN SUCCESSFUL", token });

    } catch(e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});


router.get("/", (req, res, next) => {
    try {
        // Authorization key in the req.headers object should contain the token
    const token = req.headers.authorization;

    const { SECRET_KEY } = process.env;
    verify(token, SECRET_KEY);
    

    res.send('ALLOWED ONLY IF TOKEN IS VALID');

    } catch(e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
})

export default router; 

// create a better structure for the users module
// deadline is 21st February, 2022 10:00 am.