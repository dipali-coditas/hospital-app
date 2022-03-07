import express, { json } from "express";

const app = express();

const name = (req, res, next) => {
    next();
}

const respond = (req, res, next) => {
    //next("tries to find the error handling middleware");
    next();
}

app.use(name);
app.use(respond);


app.use((req, res, next) => {
    // res.send("will this be called or not?");
    next();
})

// without method --> use
// post, get, patch, put, delete
app.post((req, res) => {
    res.send('this is a post request');
})

app.post('/manish', (req, res) => {
    res.send('Record created');
})


app.use((err, req, res, next) => {

    console.log(err);
    res.status(500).send('something went wrong')
});


// http://localhost:3000/
app.listen(3000);