import { Customer } from './Customer';
import { Restaurant } from './Restaurant';

export type Review = {
    id: string;
    author: Customer;
    restaurant: Restaurant;
    rating: number;
    comment: string;
    createdAt: Date;
}