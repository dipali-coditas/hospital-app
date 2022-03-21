import { Schema, Types, model, Document } from 'mongoose';
import { IUser } from './user.types';

// departmentSchema

// _id
// name, email, employeeId, password, departmentId, roles
// assignedNurse, assignedDoctors, isDeleted


class UserSchema extends Schema {
    constructor() {
        super({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            userId: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            departmentId: {
                type: Types.ObjectId,
                required: true,
                ref: 'Department'
            },
            roles: {
                type: [Types.ObjectId],
                required: true,
                ref: 'Role'
            },
            assignedDoctor: {
                type: [Types.ObjectId],
                required: false,
                ref: 'User'
            },
            assignedNurse: {
                type: Types.ObjectId,
                required: false,
                ref: 'User'
            },
            isDeleted: {
                type: Boolean,
                required: true,
                default: false
            }
        })
    }
}

type UserDocument = Document & IUser;

const UserModel = model<UserDocument>('User', new UserSchema());

export default UserModel;


// roles
// departments