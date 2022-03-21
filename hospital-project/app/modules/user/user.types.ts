export interface IUser {
    // create interface   
    name: string,
    email: string,
    userId:string,
    password: string,
    departmentId: string,
    roles: string[],
    assignedDoctor: string[],
    assignedNurse: string,
    isDeleted: boolean
}