import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "./user.service";

const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const result = await userService.create(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const result = await userService.getAll();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const result = await userService.getOne(req.params.id);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});


router.put("/", async (req, res, next) => {
    try {
        const result = await userService.update(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const result = await userService.deleteOne(req.params.id);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});





export default router;