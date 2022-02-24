import { Router, Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../../utility/response.types";
import { CreateUserValidator } from "./user.validations";
import userService from "./user.service";

const router = Router();

// 1 POST API -> registers the user
router.post("/", CreateUserValidator, (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const user = req.body;
        const result = userService.createUser(user);
        res.send(new ResponseHandler(result));
    } catch(e) {
        res.status(500).send(new ResponseHandler(null, e));
    }
})

export default router;