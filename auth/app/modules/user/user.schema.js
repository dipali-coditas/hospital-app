import { v4 } from "uuid";

class UserSchema {
    users = [];

    create(user) {
        const id = v4();

        let userRecord = { ...user, id };
        this.users.push(userRecord);

        return userRecord;
    }


    findOne(email, password) {
        const userRecord = this.users.find(u => u.email === email && u.password === password);

        return userRecord;
    }
}

const User = new UserSchema();

export default User;