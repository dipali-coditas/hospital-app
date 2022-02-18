import { body } from "express-validator";
import { validate } from "../../utility/validate.js";

export const CreateUserValidator = [
    body('name').isString().notEmpty().withMessage('name is required'),
    body('email').isEmail().notEmpty().withMessage('email is required'),
    body('password').isString().isLength({ min: 6, max: 12 }).withMessage('password is required'),
    validate
];

export const LoginUserValidator = [
    body('email').isEmail().notEmpty().withMessage('email is required'),
    body('password').isString().isLength({ min: 6, max: 12 }).withMessage('password is required'),
    validate
]