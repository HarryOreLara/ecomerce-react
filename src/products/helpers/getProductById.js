
import { products } from "../../data/products";


export const getProductById = (id) => {

    const resp =  products.find(product => product.id == id);
    return resp;
}   


export const getPaginatedProducts = (limit = 10, offset = 0) => {
    return products.slice(offset, offset + limit);
}