import { Customer } from './Customer';

export class Review {
    constructor(
        public id: string,
        public author: Customer,
        public rating: number,
        public comment: string,
        public createdAt: string
    ) { }
}