import Realm, {BSON} from 'realm';

export class Payment extends Realm.Object<Payment>{
    _id!:BSON.ObjectId
    amount!:number
    type!:"card"|"paypal"
    last4Digits!:string
    createdAt!:Date

    schema = {
        name: 'Payment',
        properties: {
            _id: 'objectId',
            amount: 'double',
            type: 'string',
            last4Digits: 'string',
            createdAt: 'date'
        },
        primaryKey: '_id'
    }
}