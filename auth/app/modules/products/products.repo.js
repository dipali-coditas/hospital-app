import ProductDB from './products.schema.js';


const getProducts = () => ProductDB.find();

export default {
    getProducts
}