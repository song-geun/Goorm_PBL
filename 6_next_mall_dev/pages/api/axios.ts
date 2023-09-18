import axios from "axios"

const instance: Function = axios.create({
    baseURL : "https://fakestoreapi.com/products"
});

export default instance;