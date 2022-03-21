import { connect } from 'mongoose';

export const connectToMongo = async () => {
    try {  
        const { MONGO_CONNECTION } = process.env;
        await connect(MONGO_CONNECTION || '');
        console.log('CONNECTED TO MONGO');
        return true;
    } catch(e) {
        throw { message: 'FAILED TO CONNECT TO MONGO' }
    }
}