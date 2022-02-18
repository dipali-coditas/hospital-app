import { body } from "express-validator";
import { validate } from "../../utility/validator";

export const CreateProductValidator = [
    body('name').isString().notEmpty().withMessage("name is invalid"),
    body('price').isFloat({ min: 100000 }).withMessage("price minimum is 1L"),
    body('description').isString().isLength({ min: 20, max: 140 }),
    validate
];