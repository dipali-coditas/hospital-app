import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "./user.service";

const router = Router();

// register
// POST, "/user/register"
// permit, validator
router.post('/register', async (req, res, next) => {
    try {
        const user = req.body;
        const result = await userService.register(user);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await userService.login(credentials);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.get('/profile', async (req, res, next) => {
    try {
        // const { _id } = res.locals['user'];
        const { password, ...userData } = res.locals['user'];
        // const result = await userService.getProfile(_id);
        res.send(new ResponseHandler(userData));
    } catch (e) {
        next(e);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const filters = req.query;
        const result = await userService.getAllUsers(filters);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})