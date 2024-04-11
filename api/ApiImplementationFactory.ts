import { Customer } from './schema/Customer.ts';
import { Order } from './schema/Order.ts';
import { Review } from './schema/Review.ts';
import { Restaurant } from './schema/Restaurant.ts';


export interface ApiImplementationFactory {
    initialise(): void;

    //Restaurants
    getRestaurant(id: string): Promise<Restaurant>;
    getRestaurants(): Promise<Restaurant[]>;
    createRestaurant(Restaurant: Restaurant): Promise<Restaurant>;

    //orders
    getOrder(id: string): Promise<Order>;
    getOrders(customer: Customer): Promise<Order[]>;
    createOrder(order: Order): Promise<Order>;
    updateOrder(order: Order): Promise<Order>;

    //customers
    getCustomer(id: string): Promise<Customer>;
    getCustomers(): Promise<Customer[]>;
    createCustomer(customer: Customer): Promise<Customer>;
    updateCustomer(customer: Customer): Promise<Customer>;

    //reviews
    getReview(id: string): Promise<Review>;
    getReviews(): Promise<Review[]>;
    createReview(review: Review): Promise<Review>;
    updateReview(review: Review): Promise<Review>;

}