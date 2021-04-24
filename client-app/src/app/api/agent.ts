import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Order } from '../models/order';
import { store } from '../stores/store';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;
}, (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
        case 400:
        if (typeof data === 'string') {
            toast.error(data);
        }    
        if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    modalStateErrors.push(data.errors[key])
                }
                throw modalStateErrors.flat();
            }
            break;
        case 401:
            toast.error('unauthorise');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
            history.push('server-error');
            break;
    }
    return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
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