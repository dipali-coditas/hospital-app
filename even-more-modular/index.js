import { config } from 'dotenv';
config();

import { startServer } from './app/app.js';
startServer();

// 1. npm start -> node index.js
// the root index.js file runs
// imports the environment variables in the process.env object
// calls the startServer function -> (defined in the app/app.js file)
// 2. index.js -> app.js
// creates a new express application and starts listening on some PORT
// it calls the registerRoutes method (defined in app/routes/index.js)
// 3. app.js -> routes/index.js
// registers all the middlewares & sub routes/endpoints
// routes data is fetched from the routes.data.js file 
// routes is an array of object with two properties -> path, router
// 4. routes/index.js -> routes/routes.data.js
// imports all the modules' routing file
// uses the Route class (routes/routes.types.js) to create an array
// of routes
// 5. routes/routes.data.js -> routes/routes.types.js 