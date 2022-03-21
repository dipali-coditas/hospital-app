import { Router, Request, Response, NextFunction, Application } from "express";
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
        // next(); // will not find the next middleware.
        next(e); // tries to find the error handling middleware
    }
})

export default router;