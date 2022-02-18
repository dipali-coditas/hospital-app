import { Router } from "express";
import { CreateProductValidator } from "./products.validations.js";

const router = Router();

router.get("/", (req, res, next) => {
    res.send('PRODUCTS FETCHED');
});

// create product API should have 
// name, price (numeric > 100000), description (20 chars to 140 chars)

const creator = (req, res, next) => {
    res.send('PRODUCT CREATED');
}
router.post("/", CreateProductValidator, creator)

export default router;