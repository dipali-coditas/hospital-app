// responsible for all the database part
// ASSIGNMENT ->
// implement the save, updateOne & deleteOne methods
// send the user.schema.js file via DM on slack

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