import axios, { AxiosResponse } from 'axios';
import { Order } from '../models/order';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body:{}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Orders = {
    list: () => requests.get<Order[]>('/orders'),
    details: (id: string) => requests.get<Order>(`/orders/${id}`),
    create: (order: Order) => axios.post<void>('/orders', order),
    update: (order: Order) => axios.put<void>(`/orders/${order.id}`, order),
    delete: (id: string) => axios.delete<void>(`/orders/${id}`)
}

const agent = {
    Orders
}

export default agent;