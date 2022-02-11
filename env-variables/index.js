// this code will pushed to git
// even if by mistake the repo is public
// will be leaked to the public
// process.env = {
//     PORT: 3000,
//     DB_CONNECTION: 'mysql:6088/password:username',
//     S3_SECRET: 'secret'
// }

import { config } from 'dotenv';
config(); // it reads the .env file
// and populates the process.env object

import { startServer } from './app/app.js';
startServer();

// environment
// 1. development (local codebase) --> DB here is local
// 2. staging (where testing & UAT happens) --> DB here is on staging server
// 3. production (where actual application is deployed) --> DB is prod DB


// WE NEED A DYNAMIC APPROACH FOR ENV SPECIFIC THINGS
// PORT number
// DB CONNECTION 
// SECRET KEYS (testing & production for payment gateway, s3)
// MAILING SYSTEM CONFIGS

// IN NODE -->
// global variable (which is an object)
process;
// on this process object there is a key 'env'
process.env;
// process.env is also an object which holds all the environment variables
// as key and value pairs