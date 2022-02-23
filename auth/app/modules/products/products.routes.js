import { Router } from "express";
import { ResponseHandler } from "../../utility/response.js";
import productsService from "./products.service.js";

const router = Router();

router.get("/", (req, res, next) => {
    try {
       const result = productsService.getProducts();
       res.send(new ResponseHandler(result));
    } catch(e) {
        res.status(500).send(new ResponseHandler(null, e));
    }
});

export default router;