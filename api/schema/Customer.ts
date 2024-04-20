
import Realm, {BSON} from 'realm';
import { Cart } from "./SwiftByteTypes";

export class Customer extends Realm.Object<Customer> {
    _id!: BSON.ObjectId;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    address!: string;
    password!: string;
    cart?: Cart;

    schema = {
        name: 'Customer',
        properties: {
            _id: 'objectId',
            firstName: 'string',
            lastName: 'string',
            email: 'string',
            phone: 'string',
            address: 'string',
            password: 'string',
            isMember: 'bool',
            cart: 'Cart?'
        },
        primaryKey: '_id'
    };

    // public getCart(): Cart | undefined {
    //     return this.cart;
    // }
    // public addToCart(item: MenuItem, restaurant: Restaurant): void {
    //     if (!this.cart) {
    //         this.cart = {items: [], total: 0};
    //     } else if (this.cart.restaurant.id !== restaurant.id) {
    //         throw new Error("Cannot add items from different restaurants to the same cart");
    //     }
    //     this.cart.total += item.price;
    //     this.cart.items.push(item);
    // }
    // public removeFromCart(item: MenuItem): void {
    //     if (!this.cart) {
    //         throw new Error("Cart not found");
    //     }
    //     const itemPresent = this.cart.items.find(i => i.name === item.name);
    //     if (!itemPresent) {
    //         throw new Error("Item not found");
    //     }
    //     this.cart.total -= item.price;
    //     this.cart.items = this.cart.items.filter(i => i.name !== item.name);
    // }
}