import { verify } from "jsonwebtoken";


// convert function to a GLOBAL MIDDLEWARE
export const authorize = (excludedPaths) => {
    // req, res are object which are shared across the middleware pipeline
    // it means that req & res objects are going be the SAME in each req-res cycle
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
            const payload = verify(token, SECRET_KEY);
    
            // create a new key in the req object
            req["user"] = payload;
            // next(payload); does not work this way.


            next();
        } catch (e) {
            res.status(403).send({ message: "FORBIDDEN" });
        }
    }
}

// permittedRoles is an array of permitted roles
// changeRole API -> ['ADMIN']
// getTools API -> ['ADMIN', 'ISSUER', 'OPERATOR']
export const permit = (permittedRoles) => {
    return (req, res, next) => {
        // how will this middleware understand what the role is?
        // the role will come from the previous middleware
        // where it sets the user key in the req object
        if(permittedRoles.includes(req.user.roleId)) {
            return next();
        }

        res.status(403).send({ message: "UNAUTHORIZED" });
    }
}