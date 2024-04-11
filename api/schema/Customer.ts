import { User, Payment } from "./db.types";

export class Customer implements User {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public address: string,
        public password: string,
        public payment: Payment
    ) { }
}