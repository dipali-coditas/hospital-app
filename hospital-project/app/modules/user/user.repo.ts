import UserModel from "./user.schema";

const create = (user: any /*IUser*/) => UserModel.create(user);

const findOne = (credentials: any) => UserModel.findOne(credentials);

const getProfile = (id: string) => UserModel.findById(id).select("-password");

const getAllUsers = (filters: any) => UserModel.find(filters);

export default {
    create,
    findOne,
    getProfile,
    getAllUsers
}