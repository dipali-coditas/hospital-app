import { body } from "express-validator";

export const CreateUserValidator = [
    body('name').isString().withMessage('name is required'),
    body('email').isEmail().withMessage('email is required'),
    body('password').isString().notEmpty().withMessage('password is reqoired')
];