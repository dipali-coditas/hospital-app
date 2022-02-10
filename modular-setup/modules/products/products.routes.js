// RESPONSIBILITY -> register the endpoints/routes of the products module
// ROUTER
import { Router } from "express";

// router has the ability to register routes/endpoints
const router = Router();

// localhost:3000/product
router.post('/', (req, res, next) => {
    res.send('PRODUCT CREATED');
});

router.get('/', (req, res, next) => {
    res.send('PRODUCT FETCHED');
});

router.put('/', (req, res, next) => {
    res.send('PRODUCT UPDATED');
});

router.delete('/', (req, res, next) => {
    res.send('PRODUCT DELETED');
});

export default router;