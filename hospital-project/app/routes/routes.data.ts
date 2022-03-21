import { IExcludePath, Route } from './routes.types';

export const router: Route[] = [];

export const excludedPaths: IExcludePath[] = [
    { method: 'POST', path: '/user/login' }
]