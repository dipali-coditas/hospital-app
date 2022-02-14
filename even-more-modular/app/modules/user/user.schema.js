// responsible for all the database part

class UserSchema {
    users = [];

    // methods
    save(user) {

    }

    getAll() {
        throw { };
        return this.users;
    }

    updateOne(user) {

    }

    deleteOne(userId) {

    }
}

// create a instance of the UserSchema
const User = new UserSchema();

export default User;