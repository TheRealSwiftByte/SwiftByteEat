import { Payment, MenuItem, Customer, Restaurant } from "./SwiftByteTypes";


export interface OrderDetails {
    customer: Customer,
    restaurant: Restaurant,
    deliveryInstruction: string,
    deliveryAddress: string,
}

export type Order = {
    id: string
    customer: Customer
    restaurant: Restaurant
    items: MenuItem[]
    status: "pending" | "accepted" | "declined" | "completed"
    total: number
    orderDate: Date
    payment: Payment | undefined
    deliveryInstruction: string
    deliveryAddress: string
}