import express, { json } from 'express';
const app = express();

//accept JSON body from the request and applying middlewre to pass the body to next middleware​
app.use(json());
//accepting json body from the request 

const users = []; //initially empty array of users​
//CREATE

app.post('/users', (req, res, next) => {
    console.log("USERS CREATING")

    console.log(req.body);
    users.push({ ...req.body });
    res.send("USERS CREATED")
})

//READ
app.get('/users', (req, res, next) => {
    console.log("GETTING  DATA FROM DATABASE")
    res.send(users)
})
app.listen(
    8000,
    () => {
        console.log("SERVER IS STARTED ON PORT 8000")
    }
)