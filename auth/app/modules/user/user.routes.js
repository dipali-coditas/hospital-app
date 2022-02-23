import { Router } from "express";
import jwt from "jsonwebtoken";
import { authorize, permit } from "../../utility/authorize.js";

const { sign, verify } = jwt;

import User from "./user.schema.js";
import { CreateUserValidator, LoginUserValidator } from "./user.validations.js";

const router = Router();

// register user endpoint (CREATE a user)
// name, email, password, roleId
router.post("/", permit(['23456789']), CreateUserValidator, (req, res, next) => {
    try {
        const result = User.create(req.body);
        // creating the response format
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

        // checking something
        if(!userRecord) {
            // creating response format
            return res.status(404).send({ message: 'INVALID CREDENTIALS' });
        }

        // generating something
        // 2. generate token
        const { SECRET_KEY } = process.env;
        const token = sign(userRecord, SECRET_KEY);

        res.send({ message: "LOG IN SUCCESSFUL", token });

    } catch(e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
});

// userRecord = { name: "Abcd", roleIds: ["123456789", "0987654321"], email: "a@a.com", password: "kjsfdjfd" }
// sign(userRecoird, SECRET_KEY) -> "eyhgfkjeouiaasjlknlkajhdxoiuydoi.wo3hxlahdmlkasjlasd"
// token -> "eyhgfkjeouiaasjlknlkajhdxoiuydoi.wo3hxlahdmlkasjlasd"
// verify(token, SECRET_KEY) -> { name: "Abcd", roleId: "123456789", email: "a@a.com", password: "kjsfdjfd" }
// payload -> { name: "Abcd", roleId: "123456789", email: "a@a.com", password: "kjsfdjfd" }


router.get("/", permit(['456789087654']), (req, res, next) => {
    try {
    // Authorization key in the req.headers object should contain the token
    // authorize(req.body.authorization);// will have to be put in each route
    // remove the authorize dependency

    res.send('ALLOWED ONLY IF TOKEN IS VALID');

    } catch(e) {
        res.status(500).send({ message: 'SOMETHING WENT WRONG' });
    }
})

export default router; 

// create a better structure for the users module
// deadline is 21st February, 2022 10:00 am.