import Realm, {BSON} from 'realm';

export class User extends Realm.Object<User> {
    _id!: BSON.ObjectId;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    address!: string;
    password!: string;
    
    static schema: Realm.ObjectSchema = {
        name: 'User',
        properties: {
            _id: 'objectId',
            firstName: 'string',
            lastName: 'string',
            email: 'string',
            phone: 'string',
            address: 'string',
            password: 'string'
        },
        primaryKey: '_id'
    };
}