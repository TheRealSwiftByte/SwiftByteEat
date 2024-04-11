import { Restaurant } from "./Restaurant";

export enum MenuItemType {
    MAIN = "main",
    SIDE = "side",
    DRINK = "drink",
    STARTER = "starter",
    DESSERT = "dessert",
    POPULAR = "popular",
}

export interface MenuItem {
    id: string;
    type: MenuItemType;
    name: string;
    price: number;
    description: string;
    imagePath: string;
    isAvailable: boolean;
}

export enum FoodCategory {
    KOREAN = "korean",
    JAPANESE = "japanese",
    VIETNAMESE = "vietnamese",
    CHINESE = "chinese",
    THAI = "thai",
    INDIAN = "indian",
    MIDDLE_EASTERN = "middle eastern",
    MEDITERRANEAN = "mediterranean",
    ITALIAN = "italian",
    VEGAN = "vegan",
    EASTERN = "eastern",
    WESTERN = "western",
    ASIAN = "asian",
    CHICKEN = "chicken",
    BURGER = "burger",
    PIZZA = "pizza",
}

export interface Payment{
    id:string
    amount:number
    type:"card"|"paypal"
    last4Digits?:string
    createdAt:string
    updatedAt:string
}

export interface Cart {
    id: string
    restaurant: Restaurant
    items: MenuItem[]
    promoCode: string
    netTotal: number
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}
