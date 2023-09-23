import axios from "axios"

const instance: any = axios.create({
    baseURL : "https://fakestoreapi.com/"
});



export default instance;