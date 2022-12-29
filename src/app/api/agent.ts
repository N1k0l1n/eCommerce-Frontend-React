import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";

axios.defaults.baseURL='https://localhost:7086/api/';

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

const agent = {
    Catalog,
    TestErrors
}

export default agent;