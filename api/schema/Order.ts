import { Restaurant } from "./Restaurant";
import { Payment, MenuItem } from "./db.types";
import { Customer } from "./Customer";

export interface OrderDetails {
    customer: Customer,
    restaurant: Restaurant,
    deliveryInstruction: string,
    deliveryAddress: string,
}

export class Order {
    public id: string
    public customer: Customer
    public restaurant: Restaurant
    public items: MenuItem[]
    public status: "pending" | "accepted" | "declined" | "completed"
    public total: number
    // public discount: number //I don't like how this is done
    public orderDate: Date
    public payment: Payment | undefined
    public deliveryInstruction: string
    public deliveryAddress: string
    constructor(orderDetails: OrderDetails){
        this.id = Math.random().toString(36);
        this.customer = orderDetails.customer;
        this.restaurant = orderDetails.restaurant;
        this.status = "pending";
        const cart = this.customer.getCart();
        if (!cart) {
            throw new Error("Cart not found");
        }
        this.items = cart.items;
        this.total = cart.total;
        this.deliveryAddress = orderDetails.deliveryAddress;
        this.deliveryInstruction = orderDetails.deliveryInstruction;
        this.orderDate = new Date();
    }
    
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