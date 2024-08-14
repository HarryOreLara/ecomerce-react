
import { products } from "../../data/products";


export const getProductById = (id) => {

    const resp =  products.find(product => product.id == id);
    return resp;
}   