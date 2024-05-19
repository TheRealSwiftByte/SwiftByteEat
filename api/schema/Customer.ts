
import { Cart } from "./SwiftByteTypes";

export type Customer = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    password: string;
    cart?: Cart;
}