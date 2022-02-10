// import the express 'function' from express
import express from 'express';

// create an express application by using the express function
// express application is nothing but an object
// this object is responsible for configuring our application
const app = express();

// configure app to handle the endpoint <base_url>/
// .use method
// accepts a callback function
// accepts 3 parameters
// 1. Request Object -> contains all the information of the http request
// 2. Response Object -> contains all the helper functions for sending a response
// 3. Next Function -> responsible to call the next middleware (a function)
// callback will be called only when there is a incoming request
// express will pass req, res & next to callback
// localhost:3000/
app.use((req, res, next) => {
    console.log('request received by our application');

    const random = Math.random();

    if(random < 0.5) {
        // res.send('abcd');
        return res.send(`${random} was generated`);
    }

    next();
    // return simply does NOT return the data to the client
    // return 'data to be returned';
});
// GLOBAL MIDDLEWARE
// should pass the execution to the next middleware
// check for some specific conditions if met.. go next
// if not met.. send back error response
// no path specified --> ALL paths will be handled by this function/middleware
// it is registered first

// it sends back a response --> an incoming request, when it send back a response ends the request response cycle

// which endpoint will this function be called on?
app.use((req, res, next) => {
    console.log('request received in function 2');
    res.send('data sent from function 2');
})

// start server using app.
// start listening on a particular port for incoming requests
// .listen method to start listening
// 1. PORT NUMBER -> which port do we want to listen to
// 2. callback function -> called after starting to listen on the port
app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
)



// create a new express application
// which listens to requests on port 5000
// give aniruddha-radon (gitlab id) developer access on gitlab