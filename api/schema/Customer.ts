import { Payment, Cart, MenuItem } from "./db.types";
import { Restaurant } from "./Restaurant";
import { User } from "./User";

export class Customer extends User {
    private cart: Cart | undefined;
    constructor(
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address: string,
        password: string,
        public isMember: boolean
    ) {
        super(id, firstName, lastName, email, phone, address, password);
        this.cart = undefined;
    }
    public getCart(): Cart | undefined {
        return this.cart;
    }
    public addToCart(item: MenuItem, restaurant: Restaurant): void {
        if (!this.cart) {
            this.cart = {restaurant, items: [], total: 0};
        } else if (this.cart.restaurant.id !== restaurant.id) {
            throw new Error("Cannot add items from different restaurants to the same cart");
        }
        this.cart.total += item.price;
        this.cart.items.push(item);
    }
    public removeFromCart(item: MenuItem): void {
        if (!this.cart) {
            throw new Error("Cart not found");
        }
        const itemPresent = this.cart.items.find(i => i.name === item.name);
        if (!itemPresent) {
            throw new Error("Item not found");
        }
        this.cart.total -= item.price;
        this.cart.items = this.cart.items.filter(i => i.name !== item.name);
    }
}