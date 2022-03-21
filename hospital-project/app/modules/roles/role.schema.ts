import { Schema, model, Document } from 'mongoose';
import { IRole } from './role.types';

// name

class RoleSchema extends Schema {
    constructor() {
        super({
            name: {
                type: String,
                required: true
            }
        })
    }
}

// what does this do?
type RoleDocument = Document & IRole;

const RoleModel = model<RoleDocument>('Role', new RoleSchema());

export default RoleModel;