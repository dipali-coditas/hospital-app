import { IUser } from "./user.types";
import UserDB from './user.schema';

const createUser = (user: IUser) => UserDB.create(user);

export default {
    createUser
}