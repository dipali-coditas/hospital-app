import { Router } from "express";

// export class Route {
//     path: string;
//     router: Router;

//     constructor(path: string, router: Router) {
//         this.path = path;
//         this.router = router;
//     }
// }

export class Route {
    // declaring the properties on the class
    // it assigns the incoming arguments directly to properties
    constructor(
        public path: string,
        public router: Router
    ) {}
}