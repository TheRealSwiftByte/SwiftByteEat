import { Restaurant } from "./Restaurant";

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

export enum MenuItemType {
    MAIN = "main",
    SIDE = "side",
    DRINK = "drink",
    STARTER = "starter",
    DESSERT = "dessert",
    POPULAR = "popular",
}

export interface MenuItem {
    type: MenuItemType;
    name: string;
    price: number;
    description: string;
    imagePath: string;
    isAvailable: boolean;
}


export interface Payment{
    amount:number
    type:"card"|"paypal"
    last4Digits?:string
    createdAt:string
}

export interface Cart {
    restaurant: Restaurant
    items: MenuItem[]
    total: number
}
