import { verify } from "jsonwebtoken";


// convert function to a GLOBAL MIDDLEWARE
export const authorize = (excludedPaths) => {
    return (req, res, next) => {
        try {
            if(
                excludedPaths.find(
                    ep => ep.method === req.method && ep.route === req.url)
                ) {
                return next();
            }

            const token = req.headers.authorization;
    
            const { SECRET_KEY } = process.env;
            verify(token, SECRET_KEY);
    
            next();
        } catch (e) {
            res.status(403).send({ message: "FORBIDDEN" });
        }
    }
}