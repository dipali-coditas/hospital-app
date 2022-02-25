import userRepo from "./user.repo";
import { IUser } from "./user.types";

// modifying incoming data
// modifying data fetched from repo
// applying any business logic

// we want to encrypt the password
// validations that are not data related

const createUser = (user: IUser) => userRepo.createUser(user);

export default {
    createUser
}