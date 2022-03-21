import { sign } from "jsonwebtoken";
import { getCredentials } from "../../utility/credentials";
import userRepo from "./user.repo";
import { IUser } from "./user.types";


const register = (user: any/*IUser*/) => {
    // 1. userId 2. password 3. hash password
    const credentials = getCredentials(user.name);
    user = { ...user, ...credentials };

    return userRepo.create(user);
}

const login = async (credentials: any) => {
    try {
        const userRecord = await userRepo.findOne(credentials);

        if(!userRecord) {
            throw {  message: 'INVALID CREDENTIALS' };
        }

        const { SECRET_KEY } = process.env;
        const token = sign(userRecord.toObject(), SECRET_KEY || '');

        return { token, roles: userRecord.roles };
    } catch (e) {
        throw { message: 'SOMETHING WENT WRONG' };
    }
}

const getProfile = (id: string) => userRepo.getProfile(id);

const getAllUsers = (filters: any) => {
    if(filters.roles.length) {
        filters['roles'] = { $in: filters.roles };
    }

    return userRepo.getAllUsers(filters);
}

export default {
    register,
    login,
    getProfile,
    getAllUsers
} 