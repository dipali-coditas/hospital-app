// responsible for all the database part
// ASSIGNMENT ->
// implement the save, updateOne & deleteOne methods
// send the user.schema.js file via DM on slack
// use these methods from the user.routes.js file
import { v4 } from 'uuid';

class UserSchema {
    users = [];

    // methods
    save(user) {
        const id = v4();
        const userRecord = { ...user, id };
        this.users.push(userRecord);

        return userRecord; 
    }

    getAll() {
        // throw { };
        return this.users;
    }

    updateOne(user) {
        const userRecord = this.users.find(u => u.id === user.id);

        if(!userRecord) throw { message: 'USER NOT FOUND' };

        userRecord = user;

        return true;
    }

    deleteOne(userId) {
        const userIndex = this.users.findIndex(u => u.id === userId);

        if(userIndex < 0) throw { message: 'USER NOT FOUND' };

        this.users.splice(userIndex, 1);

        return true;
    }
}

// create a instance of the UserSchema
const User = new UserSchema();

export default User;