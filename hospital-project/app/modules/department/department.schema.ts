import { Schema, model, Document } from 'mongoose';
import { IDepartment } from './department.types';

// name

class DepartmentSchema extends Schema {
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
type DepartmentDocument = Document & IDepartment;

const DepartmentModel = model<DepartmentDocument>('Department', new DepartmentSchema());

export default DepartmentModel;