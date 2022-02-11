import express, { json, Router } from 'express';
import { v4 } from 'uuid';

const app = express();

// THIS FILE HAS A LOT OF RESPONSIBILITIES
// 1. create our app
// 2. configuring global middlewars
// 3. start our server
// 4. manage CRUD of users module
// 5. manage CRUD of products module

// 1. reduces readability
// 2. reduces maintainability
// 3. one thing fails, everything fails

// 1. using modules

// configurations
// 1. we want accept JSON body from the request
// register a middleware that will make the body available to the next middlwares
app.use(json());

// RESTFUL API FOR Users CRUD

// A dummy database to store users
// name, age properties
const users = []; // whenever server restarts users is goint to reset to []

// CREATE --> POST
// localhost:3000/user (method = POST)
// POST requests usually have some data
// request is an object, inside which we will have a property 'body'
// the value of the body property will have the data that was with the request
app.post('/user', (req, res, next) => {
    console.log('creating user....');

    const id = v4(); // returns a uuid 
    // body is not automatically available
    // we need to configure our app to give us the body
    console.log(req.body);
    // we are creating a new object {}
    // ...req.body -> spreading all the key values in the new object
    // id -> a new property called id with value of id is created
    users.push({ ...req.body, id });

    res.send('USER CREATED');
});

// READ --> GET
app.get('/user', (req, res, next) => {
    console.log('getting users from db...');
    res.send(users);
});

// READ --> GET
// filter the users based on their name
// filters will be sent through query parameters
// ? denotes the start of query parameters
// key=value is one parameter
// to have multiple parameters you separate the key=value with &
// eg: localhost:3000/users?name=aniruddha&age=20&height=5
// 3 parameters (name, age and height)
// will be stored in req.query object
// { name: "aniruddha", age: "20", height: 5 }
// localhost:3000/users?name=aniruddha
app.get('/filter', (req, res, next) => {
    const { name } = req.query;

    const filteredUsers = users.filter(u => u.name.includes(name));

    res.send(filteredUsers);
});

// UPDATE --> PUT/PATCH
// just like post PUT also accepts data from the body
app.put('/user', (req, res, next) => {
    console.log('updating user...');
    const incomingUser = req.body;

    // find if the user exists in our dummy db
    const indexOfUser = users.findIndex(u => u.id === incomingUser.id);
    // if there is a match the index is returned
    // otherwise -1 is returned

    if (indexOfUser > -1) {
        users[indexOfUser] = incomingUser;
    } else {
        return res.send('USER NOT UPDATED');
    }

    // actual logic to update the user

    res.send('USER UPDATED');
});

// DELETE --> DELETE
// to delete we pass the id of the user in the URL
// localhost:3000/user/<id of the user>
// method = delete
// use query parameters to accept a dynamic id
// we specify the parameters in the url by prefixing it with :

// the req.params object will automatically have an object
// with the key 'id' and the value that was passed
// req.params ===> { id: "1234567890" }
app.delete('/user/:id', (req, res, next) => {
    console.log('deleting user..');

    // destructuring the req.params object
    // extracting the key 'id'
    const { id } = req.params;

    const indexOfUser = users.findIndex(u => u.id === id);

    if (indexOfUser > -1) {
        users.splice(indexOfUser, 1);
    } else {
        return res.send('USER NOT DELETED');
    }
    // actual logic to delete user

    res.send('USER DELETED');
});

// table for products
const products = [];

app.post('/product', (req, res, next) => {
    const product = req.body;
    // create a uuid
    const id = v4();

    products.push({ ...product, id });

    res.send('PRODUCT CREATED');
});

app.get('/product', (req, res, next) => {
    res.send(products);
});

// price or the discount
// price is the max price
// discount is min discount
app.get('/filter-products', (req, res, next) => {
    // price and discount both are optional and may not be sent
    const { price = Infinity, discount = 0 } = req.query;
    const filtered = products.filter(p => p.price <= price && p.discount >= discount);

    // ASSIGNMENT SOLUTION:

    // if (!price && !discount) {
    //     return res.send(products);
    // }

    // check if price or discount is provided
    // BAD WAY
    // assignment -> create a more optimal/clean solution for filtering
    // if (price && !discount) {
    //     const filtered = products.filter(p => p.price <= price);
    //     return res.send(filtered);
    // }

    // if (discount && !price) {
    //     const filtered = products.filter(p => p.discount >= discount);
    //     return res.send(filtered);
    // }

    // const filtered = products.filter(p => p.discount >= discount && p.price < price);

    

    res.send(filtered);
})

app.put('/product', (req, res, next) => {
    const incomingProduct = req.body;

    // check if incomingProduct exists in our products array
    const productIndex = products.findIndex(p => p.id === incomingProduct.id);

    if (productIndex > -1) {
        products[productIndex] = incomingProduct;
        return res.send('PRODUCT UPDATED');
    }

    res.send('PRODUCT NOT UPDATED');
});

app.delete('/product/:id', (req, res, next) => {
    const { id } = req.params;

    // check if id exists in our products array
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex > -1) {
        products.splice(productIndex, 1);
        return res.send('PRODUCT DELETED');
    }

    res.send('PRODUCT NOT DELETED');
})


app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
)




// create a npm project
// use express to create a CRUD server for
// products list
const product = {
    name: "Shoes",
    color: "Black",
    manufacturer: {
        name: "Nike",
        address: {
            city: "Mumbai",
            country: "India"
        }
    },
    price: 9999,
    discount: 10
}

// filter the products on 2 keys: price & discount
