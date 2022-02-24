import { IUser } from "./user.types";

class UserSchema {
    users: IUser[] = [];

    create(user: IUser) {
        this.users.push(user);
    }
}

const User = new UserSchema();

export default User;