import { ApiImplementationFactory } from "./ApiImplementationFactory";
import {Restaurant, Order, Customer, Review} from "./schema/SwiftByteTypes.ts";
import { getRestaurant, listRestaurants, getOrder, listOrders, getCustomer, listReviews, getReview } from "../src/graphql/queries.ts";
import { createRestaurant, createOrder, updateOrder, createCustomer, updateCustomer, updateReview, createReview } from "@/src/graphql/mutations.ts";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import amplifyconfig from "../src/amplifyconfiguration.json";
import { UpdateOrderInput } from "@/src/API.ts";

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
            return restaurantData.data.getRestaurant as Restaurant;
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
            return orderData.data.getOrder as Order;
        } catch {
            console.error("Failed to get order");
        }
    };
    async getOrders(customer: Customer): Promise<Order[] | undefined>{ 
        try {
            const orderData = await client.graphql({
                query: listOrders,
                variables: {
                    filter: {
                        customerOrdersId: {
                            eq: customer.id
                        }
                    }
                }
            });
            return orderData.data.listOrders.items;
        } catch {
            console.error("Failed to get orders");
        }
    };
    async createOrder(order: Order): Promise<boolean>{
        try {
            await client.graphql({
                query: createOrder,
                variables: { input: order }
            });
            return true;
        } catch {
            console.error("Failed to create order");
            return false;
        }
    };
    async updateOrder(order: Order): Promise<boolean>{
        //almost definitely has bug where if an optional field isnt in order object it updates to undefined
        //could also just be intended behaviour, you could argue it at least. Could be fixed by conditionally checking each filed, cbf
        const updateInput: UpdateOrderInput = {
            id: order.id,
            status: order.status,
            total: order.total,
            orderDate: order.orderDate,
            deliveryInstruction: order.deliveryInstruction,
            deliveryAddress: order.deliveryAddress,
            restaurantOrdersId: order.restaurantOrdersId,
            customerOrdersId: order.customerOrdersId,
            orderPaymentId: order.orderPaymentId
        }
        try {
            await client.graphql({
                query: updateOrder,
                variables: { input: updateInput }
            });
            return true;
        } catch {
            console.error("Failed to update order");
            return false;
        }
    }

    //customers
    async getCustomer(id: string): Promise<Customer | undefined>{
        try {
            const customerData = await client.graphql({
                query: getCustomer,
                variables: { id }
            });
            return customerData.data.getCustomer as Customer;
        } catch {
            console.error("Failed to get customer");
        }
    };
    getCustomers(): Promise<Customer[]>{
        throw new Error("Method not implemented.");
    }; //possibly unnecessary

    async createCustomer(customer: Customer): Promise<boolean>{
        try {
            await client.graphql({
                query: createCustomer,
                variables: { input: customer }
            });
            return true;
        } catch {
            console.error("Failed to create customer");
            return false;
        }
    }


    async updateCustomer(customer: Customer): Promise<boolean>{
        try {
            await client.graphql({
                query: updateCustomer,
                variables: { input: customer }
            });
            return true;
        } catch {
            console.error("Failed to update customer");
            return false;
        }
    }

    //reviews
    async getReview(id: string): Promise<Review | undefined>{
        try {
            const reviewData = await client.graphql({
                query: getReview,
                variables: { id }
            });
            return reviewData.data.getReview as Review;
        } catch {
            console.error("Failed to get review");
        }
    };

    async getReviews(): Promise<Review[] | undefined>{
        try {
            const reviewData = await client.graphql({
                query: listReviews,
            });
            return reviewData.data.listReviews.items;
        } catch {
            console.error("Failed to get reviews");
        }
    }

    async createReview(review: Review): Promise<boolean>{
        try {
            await client.graphql({
                query: createReview,
                variables: { input: review }
            });
            return true;
        } catch {
            console.error("Failed to create review");
            return false;
        }
    }

    async updateReview(review: Review): Promise<boolean>{
        try {
            await client.graphql({
                query: updateReview,
                variables: { input: review }
            });
            return true;
        } catch {
            console.error("Failed to update review");
            return false;
        }
    }
}