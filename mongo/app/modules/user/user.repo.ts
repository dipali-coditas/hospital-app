import UserModel from "./user.schema";
import { IUser } from "./user.types";

// CRUD
const create = (user: IUser) => UserModel.create(user);

const getAll = () => UserModel.find();

const getOne = (id: string) => UserModel.findById(id);

const update = (user: IUser) => UserModel.updateOne({
    _id: user._id
}, user);

const deleteOne = (id: string) => UserModel.findByIdAndDelete(id);

export default {
    create,
    getAll,
    getOne,
    update,
    deleteOne
}