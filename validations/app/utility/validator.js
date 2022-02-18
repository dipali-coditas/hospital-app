import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    // if errors are present
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send(errors)
    }

    next();
}