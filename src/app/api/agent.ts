import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";

axios.defaults.baseURL='http://localhost:7086/api/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

//Axios interceptor

axios.interceptors.response.use(response =>{
    return response 
}, (error : AxiosError) => {
    const {data, status} = error.response!;
    switch(status) {
        case 400:
            toast.error(data);
            break;
        case 401:
            toast.error(data);
            break;
        case 500:
            history.push({
                pathname:'/server-error',
                state:{error: data}
            })
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const request = {
    get:(url:string) => axios.get(url).then(responseBody),
    post:(url:string, body:{}) => axios.post(url, body).then(responseBody),
    put:(url:string, body:{}) => axios.put(url, body).then(responseBody),
    delete:(url:string) => axios.delete(url).then(responseBody)
}

//Store Request for Catalog

const Catalog ={
    list: ()=>request.get('products'),
    details : (id:number) => request.get(`products/${id}`)
}

const TestErrors = {
    get400Error : () => request.get('buggy/bad-request'),
    get401Error : () => request.get('buggy/unathorized'),
    get404Error : () => request.get('buggy/not-found'),
    get500Error : () => request.get('buggy/server-error'),
    getValidationError : () => request.get('buggy/validation')
}


const Basket = {
    get:()=> request.get('basket'),

    addItem: (productId: number , quantity = 1) => request.post(`basket?productId=${productId}&quantity=${quantity}`, {}),

    removeItem: (productId: number , quantity = 1) => request.delete(`basket?productId=${productId}&quantity=${quantity}`),
}


const agent = {
    Catalog,
    TestErrors,
    Basket
}

export default agent;