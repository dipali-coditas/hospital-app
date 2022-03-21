import { Router } from "express";

export class Route {
    constructor(
        public path: string,
        public router: Router
    ) {}
}

export interface IExcludePath {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string
}