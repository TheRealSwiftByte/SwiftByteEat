export enum MenuItemType {
    MAIN = "main",
    SIDE = "side",
    DRINK = "drink",
    STARTER = "starter",
    DESSERT = "dessert",
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

export interface Restaurant {
    id: string;
    categories: FoodCategory[];
    name: string;
    address: string;
    phone: string;
    averageRating: number;
    averageWaitTime: number;
    menu: MenuItem[];
}

export interface Order {
    id: string;
    customer: Customer;
    restaurant: Restaurant;
    items: MenuItem[];
    status: "pending"|"accepted"|"declined"|"completed";
    netTotal: number;
    promoCode: string;
    discount: number;
    createdAt: string;
    updatedAt: string;
    payment:Payment
}

export interface Payment{
    id:string
    amount:number
    type:"card"|"paypal"
    last4Digits?:string
    createdAt:string
    updatedAt:string
}

export interface Review{
    id:string
    author:Customer
    rating:number
    comment:string
    createdAt:string
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

export interface Customer extends User {
    activeCartId: string | null;
}

export interface Driver extends User {
    vehicle: string;
    licensePlate: string;
}