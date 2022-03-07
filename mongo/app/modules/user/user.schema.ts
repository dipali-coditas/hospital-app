import {Schema, model} from 'mongoose';

class UserSchema extends Schema {
    constructor() {
        // calls the constructor of the Schema class
        super({
            name: {
                // what kind of data we can store
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        }, {
            timestamps: true
        });
    }
}

const UserModel = model('User', new UserSchema());

export default UserModel;
