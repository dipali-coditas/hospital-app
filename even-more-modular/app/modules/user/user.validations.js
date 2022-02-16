import { body, params, query } from "../../utility/validations.middleware.js";


// an array of middlewares
export const CreateUserValidator = [
    body("name"),
    body("age"),
    body("height")
];

export const DeleteUserValidator = [
    params("id")
]

export const FilterUserValidator = [
    query("name"),
    query("pageSize"),
    query("pageNumber")
];