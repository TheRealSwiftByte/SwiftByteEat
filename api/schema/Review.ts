import { Customer } from './Customer';
import { Restaurant } from './Restaurant';
import Realm, { BSON } from 'realm';

export class Review extends Realm.Object<Review> {
    _id!: BSON.ObjectId;
    author!: Customer;
    restaurant!: Restaurant;
    rating!: number;
    comment!: string;
    createdAt!: Date;

    static schema = {
        name: 'Review',
        properties: {
            _id: 'objectId',
            author: 'Customer',
            restaurant: 'Restaurant',
            rating: 'int',
            comment: 'string',
            createdAt: 'date'
        }
    }
}