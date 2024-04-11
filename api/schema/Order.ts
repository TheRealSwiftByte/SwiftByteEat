import { Restaurant } from "./Restaurant";
import { Payment, MenuItem } from "./db.types";
import { Customer } from "./Customer";

export class Order {
    constructor(
        public id: string,
        public customer: Customer,
        public restaurant: Restaurant,
        public items: MenuItem[],
        public status: "pending" | "accepted" | "declined" | "completed",
        public total: number,
        public tax: number,
        public netTotal: number,
        public promoCode: string,
        public discount: number,
        public orderDate: Date,
        public payment: Payment,
        public deliveryInstruction: string,
        public deliveryAddress: string
    ) { }
}