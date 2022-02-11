// RESPONSIBILITY -> starting the server
// DEFAULT EXPORT FROM FILES, YOU CAN RENAME THEM
// express can renamed to whatever you like
// UserRouter can be renamed to whatever you like
import express from "express";
import { registerRoutes } from './routes/index.js';

const app = express(); // initializes a NEW object of type Express
// a new express application gets created
// store the object/instance in app

app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
);

registerRoutes(app);


// ASSIGNMENT FOR TODAY -
// 1. reduce the responsibilities of index.js
// 2. add CRUD logic in the user module and product module