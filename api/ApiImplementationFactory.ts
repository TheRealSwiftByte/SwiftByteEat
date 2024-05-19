
import {Customer, Order, Review, Restaurant} from "./schema/SwiftByteTypes.ts";

export interface ApiImplementationFactory {
    //Restaurants
    getRestaurant(id: string): Promise<Restaurant | undefined>;
    getRestaurants(): Promise<Restaurant[] | undefined>;
    createRestaurant(Restaurant: Restaurant): Promise<boolean>;

    //orders
    getOrder(id: string): Promise<Order | undefined>;
    getOrders(customer: Customer): Promise<Order[] | undefined>;
    createOrder(order: Order): Promise<boolean>;
    updateOrder(order: Order): Promise<boolean>;

    //customers
    signInCustomer(email: string, password: string): Promise<Customer>;
    getCustomer(id: string): Promise<Customer | undefined>;
    getCustomers(): Promise<Customer[] | undefined>; //possibly unnecessary
    createCustomer(customer: Customer): Promise<boolean>;
    updateCustomer(customer: Customer): Promise<boolean>;

    //reviews
    getReview(id: string): Promise<Review | undefined>;
    getReviews(): Promise<Review[] | undefined>;
    createReview(review: Review): Promise<boolean>;
    updateReview(review: Review): Promise<boolean>;
}