
import { Cart } from "./SwiftByteTypes";

export type Customer = {
    id: string;
    membership: "ByteElite" | "Standard";
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    address?: string;
    cart: Cart;
}

export type CreateCustomerInput = {
    membership: "ByteElite" | "Standard";
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    address?: string;
    cart?: Cart;
}

export type UpdateCustomerInput = {
    membership?: "ByteElite" | "Standard";
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    address?: string;
    cart?: Cart;
}