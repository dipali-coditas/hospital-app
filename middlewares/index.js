import express from 'express';

const app = express();

// global middleware which handles all the requests
app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    console.log(req.method);
    next();
    // next will check if the route/endpoint matches any endpoint
    // it will check for the method
});

// middlewares which are called on specific routes/endpoints
// localhost:3000/apple --> called first
app.get("/apple", (req, res, next) => {
    res.send('keeps the doctor away');
    //next();
});


// localhost:3000/apple --> if first middleware calls next()
app.get('/apple', (req, res, next) => {
    res.send('apple makes appy fizz');
})

app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
)