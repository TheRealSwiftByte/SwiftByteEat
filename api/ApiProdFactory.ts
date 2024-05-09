import { ApiImplementationFactory } from "./ApiImplementationFactory";
import {Restaurant, Order, Customer, Review} from "./schema/SwiftByteTypes.ts";
import { getRestaurant, listRestaurants, getOrder, listOrders } from "../src/graphql/queries.ts";
import { createRestaurant } from "@/src/graphql/mutations.ts";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import amplifyconfig from "../src/amplifyconfiguration.json";

Amplify.configure(amplifyconfig);
const client = generateClient();

export class ApiProdFactory implements ApiImplementationFactory {

    //Restaurants
    async getRestaurant(id: string): Promise<Restaurant | undefined>{
        try {
            const restaurantData = await client.graphql({
                query: getRestaurant,
                variables: { id }
            });
            return restaurantData.data.getRestaurant;
        } catch {
            console.error("Failed to get restaurant");
        }
    };

    async getRestaurants(): Promise<Restaurant[] | undefined>{
        try {
            const restaurantData = await client.graphql({
                query: listRestaurants,
            });
            return restaurantData.data.listRestaurants.items;
        } catch {
            console.error("Failed to get restaurants");
        }
    }
    async createRestaurant(Restaurant: Restaurant): Promise<boolean>{
        try {
            await client.graphql({
                query: createRestaurant,
                variables: { input: Restaurant }
            });
            return true;
        } catch {
            console.error("Failed to create restaurant");
            return false
        }
    };

    //orders
    async getOrder(id: string): Promise<Order | undefined>{
        try {
            const orderData = await client.graphql({
                query: getOrder,
                variables: { id }
            });
            return orderData.data.getOrder;
        } catch {
            console.error("Failed to get order");
        }
    };
    async getOrders(customer: Customer): Promise<Order[] | undefined>{ 
        try {
            const orderData = await client.graphql({
                query: listOrders,
                variables: { customer }
            });
            return orderData.data.getOrder;
        } catch {
            console.error("Failed to get orders");
        }
    };
    createOrder(order: Order): Promise<Order>;
    updateOrder(order: Order): Promise<Order>;

    //customers
    getCustomer(id: string): Promise<Customer>;
    getCustomers(): Promise<Customer[]>; //possibly unnecessary
    createCustomer(customer: Customer): Promise<Customer>;
    updateCustomer(customer: Customer): Promise<Customer>;

    //reviews
    getReview(id: string): Promise<Review>;
    getReviews(): Promise<Review[]>;
    createReview(review: Review): Promise<Review>;
    updateReview(review: Review): Promise<Review>;
}