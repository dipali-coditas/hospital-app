import userRepo from "./user.repo";
import { IUser } from "./user.types";

const createUser = (user: IUser) => userRepo.createUser(user);

export default {
    createUser
}