import productsRepo from "./products.repo.js"

const getProducts = () => productsRepo.getProducts();

export default {
    getProducts
}
