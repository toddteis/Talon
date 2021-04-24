export interface Order {
    id: string;
    customer: string;
    dateOrdered: Date | null;
    dateShipped: Date | null;
    product: string;
    amount: string;
    deliveryAddress: string;
}