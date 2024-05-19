import { Payment, MenuItem, Customer, Restaurant } from "./SwiftByteTypes";


export interface OrderDetails {
    customer: Customer,
    restaurant: Restaurant,
    deliveryInstruction: string,
    deliveryAddress: string,
}

export type Order = {
    id: string
    customerId: string
    restaurantId: string
    items: MenuItem[]
    status: "pending" | "accepted" | "declined" | "completed" | "cancelled" | "new" | "default" //default is for an errored state, should be deprecated
    total: number
    orderDate: number
    payment?: Payment
    deliveryInstruction: string
    deliveryAddress: string
}

export type CreateOrderInput = {
    customerId: string
    restaurantId: string
    items: MenuItem[]
    status: "pending" | "accepted" | "declined" | "completed" | "cancelled" | "new" | "default" //default is for an errored state, should be deprecated
    total: number
    deliveryInstruction: string
    deliveryAddress: string
    payment?: Payment
}