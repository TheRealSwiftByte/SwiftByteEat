import { Payment, MenuItem, Customer, Restaurant } from "./SwiftByteTypes";
import Realm, { BSON } from 'realm';

export interface OrderDetails {
    customer: Customer,
    restaurant: Restaurant,
    deliveryInstruction: string,
    deliveryAddress: string,
}

export class Order extends Realm.Object<Order> {
    public static schema: Realm.ObjectSchema = {
        name: 'Order',
        primaryKey: 'id',
        properties: {
            id: 'string',
            customer: 'Customer',
            restaurant: 'Restaurant',
            items: 'MenuItem[]',
            status: 'string',
            total: 'double',
            orderDate: 'date',
            payment: 'Payment?',
            deliveryInstruction: 'string',
            deliveryAddress: 'string',
        },
    };
    public id!: string
    public customer!: Customer
    public restaurant!: Restaurant
    public items!: MenuItem[]
    public status!: "pending" | "accepted" | "declined" | "completed"
    public total!: number
    public orderDate!: Date
    public payment: Payment | undefined
    public deliveryInstruction!: string
    public deliveryAddress!: string

    private applyDiscount(): void {
        if (this.customer.isMember) {
            this.total *= 0.9;
        }
    }

    public acceptOrder(): void {
        this.status = "accepted";
    }

    public declineOrder(): void {
        this.status = "declined";
    }

    public completeOrder(payment: Payment): void {

        if (payment.amount !== this.total) {
            throw new Error("Payment amount does not match order total");
        }
        if (this.status !== "accepted") {
            throw new Error("Order not accepted");
        }
        this.status = "completed";
    }

    public processPayment(): void {
        if (!this.payment) {
            throw new Error("Payment not found");
        }
        if (this.payment.amount !== this.total) {
            throw new Error("Payment amount does not match order total");
        }
        this.status = "accepted";
    }
}