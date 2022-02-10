// RESPONSIBILITY -> register the endpoints/routes of the users module
// ROUTER
// Router is a NAMED export and that is why it has been surrounded by {}
// and the name cannot change
import { Router } from "express";

// router has the ability to register routes/endpoints
const router = Router();

// localhost:3000/user (request MUST be POST)
router.post('/', (req, res, next) => {
    res.send('USER CREATED');
});

router.get('/', (req, res, next) => {
    res.send('USER FETCHED');
});

router.put('/', (req, res, next) => {
    res.send('USER UPDATED');
});

router.delete('/', (req, res, next) => {
    res.send('USER DELETED');
});

export default router;