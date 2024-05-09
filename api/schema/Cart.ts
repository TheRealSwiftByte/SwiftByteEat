import Realm from 'realm'
import { MenuItem } from './MenuItem'

export class Cart extends Realm.Object<Cart> {
    items?: MenuItem[]
    total?: number

    static schema = {
        name: 'Cart',
        properties: {
            items: 'MenuItem[]',
            total: 'double'
        }
    }
}
