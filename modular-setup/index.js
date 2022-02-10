// RESPONSIBILITY -> starting the server
// DEFAULT EXPORT FROM FILES, YOU CAN RENAME THEM
// express can renamed to whatever you like
// UserRouter can be renamed to whatever you like
import express, { json } from "express";
import UserRouter from './modules/users/users.routes.js';
import ProductRouter from './modules/products/products.routes.js';

const app = express();

app.use(json());

// tell app to use these routers
// when incoming request is localhost:3000/user/any/such/url
// it will use the user router
app.use('/user', UserRouter);

// when incoming request is localhost:3000/product/any/such/url
// it will use the product router
app.use('/product', ProductRouter);

app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
)

// ASSIGNMENT FOR TODAY -
// 1. reduce the responsibilities of index.js
// 2. add CRUD logic in the user module and product module