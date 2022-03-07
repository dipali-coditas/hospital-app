import userRepo from "./user.repo";
import { IUser } from "./user.types";

// CRUD
const create = (user: IUser) => userRepo.create(user);

const getAll = () => userRepo.getAll();

const getOne = (id: string) => userRepo.getOne(id);

const update = (user: IUser) => userRepo.update(user);

const deleteOne = (id: string) => userRepo.deleteOne(id);

export default {
    create,
    getAll,
    getOne,
    update,
    deleteOne
}