// create a function which takes in a key name and checks if it is present
// in the body

const middlewareFactory = (reqPart, key) => {
    return (req, res, next) => {
        // req["body"]["name"] => reqPart = "body" & key = "name"
        const data = req[reqPart][key]; // extracting the data

        // we check if the data is present or not
        // string, length is so and so
        // number, greater or less than some number
        // array
        // object
        // boolean
        // email 
        if(!data && !data.trim()) {
            return res.status(400).send({ 
                message: `${key} is required.`
            });
        }

        next();
    }
}

export const body = (key) => middlewareFactory("body", key);
export const query = (key) => middlewareFactory("query", key);
export const params = (key) => middlewareFactory("params", key);