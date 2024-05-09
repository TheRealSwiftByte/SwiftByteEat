import Realm, {BSON} from 'realm';
import { Restaurant } from './Restaurant';

enum MenuItemType {
    MAIN = "main",
    SIDE = "side",
    DRINK = "drink",
    STARTER = "starter",
    DESSERT = "dessert",
    POPULAR = "popular",
}

export class MenuItem extends Realm.Object<MenuItem> {
    _id!: BSON.ObjectId;
    type!: MenuItemType;
    name!: string;
    price!: number;
    description!: string;
    imagePath!: string;
    isAvailable!: boolean;
    restaurant!: Restaurant;

    static schema = {
        name: 'MenuItem',
        properties: {
            _id: 'objectId',
            type: 'string',
            name: 'string',
            price: 'double',
            description: 'string',
            imagePath: 'string',
            isAvailable: 'bool'
        },
        primaryKey: '_id'
    }
}