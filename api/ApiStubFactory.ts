import { Venue, VenueType, Order, Customer, Review, Cart } from './schema/db.types.ts';
import { ApiImplementationFactory } from './ApiImplementationFactory.ts';

export class ApiStubFactory implements ApiImplementationFactory {
    private carts: Cart[];
    private customers: Customer[];
    private orders: Order[];
    private venues: Venue[];
    private reviews: Review[];

    constructor() {
        this.carts = [];
        this.customers = [];
        this.orders = [];
        this.venues = [];
        this.reviews = [];
    }

    initialise(): void {
        this.seedData();
    }

    //venues
    getVenue(id: string): Promise<Venue> {
        const venue = this.venues.find(v => v.id === id);
        if (venue) {
            return Promise.resolve(venue);
        }
        return Promise.reject("Venue not found");
    }
    getVenues(): Promise<Venue[]> {
        return Promise.resolve(this.venues);
    }
    createVenue(venue: Venue): Promise<Venue> {
        this.venues.push(venue);
        return Promise.resolve(venue);
    }

    //orders
    getOrder(id: string): Promise<Order> {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            return Promise.resolve(order);
        }
        return Promise.reject("Order not found");
    }
    getOrders(customer: Customer): Promise<Order[]> {
        return Promise.resolve(this.orders.filter(o => o.customer.id === customer.id));
    }
    createOrder(order: Order): Promise<Order> {
        this.orders.push(order);
        return Promise.resolve(order);
    }
    updateOrder(order: Order): Promise<Order> {
        const index = this.orders.findIndex(o => o.id === order.id);
        if (index !== -1) {
            this.orders[index] = order;
            return Promise.resolve(order);
        }
        return Promise.reject("Order not found");
    }

    //customers
    getCustomer(id: string): Promise<Customer> {
        const customer = this.customers.find(c => c.id === id);
        if (customer) {
            return Promise.resolve(customer);
        }
        return Promise.reject("Customer not found");
    }
    getCustomers(): Promise<Customer[]> {
        return Promise.resolve(this.customers);
    }
    createCustomer(customer: Customer): Promise<Customer> {
        this.customers.push(customer);
        return Promise.resolve(customer);
    }
    updateCustomer(customer: Customer): Promise<Customer> {
        const index = this.customers.findIndex(c => c.id === customer.id);
        if (index !== -1) {
            this.customers[index] = customer;
            return Promise.resolve(customer);
        }
        return Promise.reject("Customer not found");
    }

    //reviews
    getReview(id: string): Promise<Review> {
        const review = this.reviews.find(r => r.id === id);
        if (review) {
            return Promise.resolve(review);
        }
        return Promise.reject("Review not found");
    }
    getReviews(): Promise<Review[]> {
        return Promise.resolve(this.reviews);
    }
    createReview(review: Review): Promise<Review> {
        this.reviews.push(review);
        return Promise.resolve(review);
    }
    updateReview(review: Review): Promise<Review> {
        const index = this.reviews.findIndex(r => r.id === review.id);
        if (index !== -1) {
            this.reviews[index] = review;
            return Promise.resolve(review);
        }
        return Promise.reject("Review not found");
    }

    //cart
    getCart(id: string): Promise<Cart> {
        const cart = this.carts.find(c => c.id === id);
        if (cart) {
            return Promise.resolve(cart);
        }
        return Promise.reject("Cart not found");
    }
    addToCart(cartId: string, itemId: string): Promise<Cart> {
        const cart = this.carts.find(c => c.id === cartId);
        if (cart) {
            const item = cart.items.find(i => i.id === itemId);
            if (item) {
                cart.items.push(item);
                return Promise.resolve(cart);
            }
            return Promise.reject("Item not found");
        }
        return Promise.reject("Cart not found");
    }
    removeFromCart(cartId: string, itemId: string): Promise<Cart> {
        const cart = this.carts.find(c => c.id === cartId);
        if (cart) {
            const item = cart.items.find(i => i.id === itemId);
            if (item) {
                cart.items = cart.items.filter(i => i.id !== itemId);
                return Promise.resolve(cart);
            }
            return Promise.reject("Item not found");
        }
        return Promise.reject("Cart not found");
    }

    //fill the stub up
    private seedData() {
        this.venues = [
            {
                id: "1",
                type: VenueType.RESTAURANT,
                name: "McDonalds",
                address: "123 Fake Street",
                phone: "0123456789",
                averageRating: 4.5,
                averageWaitTime: 10,
                menu: [
                    {
                        id: "1",
                        type: "main"
                        name: "Big Mac",
                        description: "A big mac",
                        price: 10
                    },
                    {
                        id: "2",
                        type: "main"
                        name: "Cheeseburger",
                        description: "A cheeseburger",
                        price: 5
                    }
                ]
            },
            {
                id: "2",
                type: VenueType.RESTAURANT,
                name: "KFC",
                address: "456 Fake Street",
                phone: "9876543210",
                averageRating: 4.0,
                averageWaitTime: 15,
                menu: [
                    {
                        id: "3",
                        type: "main"
                        name: "Zinger Burger",
                        description: "A zinger burger",
                        price: 15,
                        image: 'https://www.kfc.com.au/sites/default/files/website-nutrition-info/BBQ-Zinger-Burger.jpg',
                        available: true
                    },
                    {
                        id: "4",
                        type: "snack"
                        name: "Popcorn Chicken",
                        description: "Popcorn chicken",
                        price: 8,
                        image: 'https://www.kfc.com.au/sites/default/files/website-nutrition-info/Popcorn-Chicken.jpg',
                        available: true
                    }
                ]
            },
            {
                id: "3",
                type: VenueType.RESTAURANT,
                name: "Pizza Hut",
                address: "789 Fake Street",
                phone: "1234567890",
                averageRating: 4.2,
                averageWaitTime: 20,
                menu: [
                    {
                        id: "5",
                        type: "main",
                        name: "Pepperoni Pizza",
                        description: "A pepperoni pizza",
                        price: 20,
                        image: 'https://www.pizzahut.com.au/sites/default/files/2020-01/PHAU_Pizza_Pepperoni_1.jpg',
                        available: true
                    },
                    {
                        id: "6",
                        type: "main",
                        name: "Hawaiian Pizza",
                        description: "A hawaiian pizza",
                        price: 18,
                        image: 'https://www.pizzahut.com.au/sites/default/files/2020-01/PHAU_Pizza_Hawaiian_1.jpg',
                        available: true
                    }
                ]
            }
        ]
        this.carts = [
            {
                id: "1",
                customerId: "1",
                isActive: true,
                venue: this.venues[0],
                items: this.venues[0].menu,
                promoCode: "10OFF",
                netTotal: 100
            },
            {
                id: "2",
                customerId: "2",
                isActive: true,
                venue: this.venues[1],
                items: this.venues[1].menu,
                promoCode: "20OFF",
                netTotal: 200
            },
            {
                id: "3",
                customerId: "3",
                isActive: true,
                venue: this.venues[2],
                items: this.venues[2].menu,
                promoCode: "30OFF",
                netTotal: 300
            }
        ];
        this.customers = [
            {
                id: "1",
                name: "Alice",
                email: "alice@realemail.com",
                phone: "0123456789",
                address: "123 Fake Street",
                activeCartId: "1"
            },
            {
                id: "2",
                name: "Bob",
                email: "bob@realemail.com"
                phone: "9876543210",
                address: "456 Fake Street",
                activeCartId: "2"
            },
            {
                id: "3",
                name: "Charlie",
                email: "charlie@realemail.com",
                phone: "1234567890",
                address: "789 Fake Street",
                activeCartId: "3"
            },
        ];
        this.orders = [
            {
                id: "1",
                customerId: "1",
                venue: this.venues[0],
                items: this.venues[0].menu,
                status: "pending",
                netTotal: 100,
                promoCode: "10OFF",
                discount: 10,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                payment: {
                    id: "1",
                    amount: 100,
                    type: "card",
                    last4Digits: "1234",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            },
            {
                id: "2",
                customerId: "2",
                venue: this.venues[1],
                items: this.venues[1].menu,
                status: "accepted",
                netTotal: 200,
                promoCode: "20OFF",
                discount: 20,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                payment: {
                    id: "2",
                    amount: 200,
                    type: "paypal",
                    last4Digits: "5678",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            },
            {
                id: "3",
                customerId: "3",
                venue: this.venues[2],
                items: this.venues[2].menu,
                status: "completed",
                netTotal: 300,
                promoCode: "30OFF",
                discount: 30,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                payment: {
                    id: "3",
                    amount: 300,
                    type: "card",
                    last4Digits: "9012",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            }
        ];
        this.reviews = [
            {
                id: "1",
                customerId: "1",
                venueId: "1",
                rating: 5,
                comment: "Great food and service",
                createdAt: new Date().toISOString()
            },
            {
                id: "2",
                customerId: "2",
                venueId: "2",
                rating: 4,
                comment: "Good food but slow service",
                createdAt: new Date().toISOString()
            },
            {
                id: "3",
                customerId: "3",
                venueId: "3",
                rating: 3,
                comment: "Average food and service",
                createdAt: new Date().toISOString()
            }
        ];
    }
}