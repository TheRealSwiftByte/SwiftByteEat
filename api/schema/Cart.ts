import { MenuItem } from './MenuItem'
import { Restaurant } from './Restaurant'

export type Cart = {
    restaurant?: Restaurant
    foodItems: MenuItem[]
    foodItemCounts?: { [key: string]: number } //key is name of food item, value is quantity
    totalPrice?: number
}