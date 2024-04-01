import { Venue, Order, Customer, Review, Cart } from './schema/db.types.ts';


export interface ApiImplementationFactory {
    initialise(): void;

    //venues
    getVenue(id: string): Promise<Venue>;
    getVenues(): Promise<Venue[]>;
    createVenue(venue: Venue): Promise<Venue>;

    //orders
    getOrder(id: string): Promise<Order>;
    getOrders(cusomer: Customer): Promise<Order[]>;
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

    //cart
    getCart(id: string): Promise<Cart>;
    addToCart(cartId: string, itemId: string): Promise<Cart>;
    removeFromCart(cartId: string, itemId: string): Promise<Cart>;


}