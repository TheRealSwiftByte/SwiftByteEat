// import { Customer } from './schema/Customer.ts';
// import { Order } from './schema/Order.ts';
// import { Review } from './schema/Review.ts';
// import { Restaurant } from './schema/Restaurant.ts';
import {Customer, Order, Review, Restaurant} from "./schema/SwiftByteTypes.ts";

export interface ApiImplementationFactory {
    //Restaurants
    getRestaurant(id: string): Promise<Restaurant | undefined>;
    getRestaurants(): Promise<Restaurant[] | undefined>;
    createRestaurant(Restaurant: Restaurant): Promise<boolean>;

    //orders
    getOrder(id: string): Promise<Order | undefined>;
    getOrders(customer: Customer): Promise<Order[] | undefined>;
    createOrder(order: Order): Promise<Order | undefined>;
    updateOrder(order: Order): Promise<Order | undefined>;

    //customers
    getCustomer(id: string): Promise<Customer | undefined>;
    getCustomers(): Promise<Customer[] | undefined>; //possibly unnecessary
    createCustomer(customer: Customer): Promise<Customer | undefined>;
    updateCustomer(customer: Customer): Promise<Customer | undefined>;

    //reviews
    getReview(id: string): Promise<Review | undefined>;
    getReviews(): Promise<Review[] | undefined>;
    createReview(review: Review): Promise<Review | undefined>;
    updateReview(review: Review): Promise<Review | undefined>;
}