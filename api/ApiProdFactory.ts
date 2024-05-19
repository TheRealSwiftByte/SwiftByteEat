import { ApiImplementationFactory } from "./ApiImplementationFactory";
import {Restaurant, Order, Customer, Review} from "./schema/SwiftByteTypes.ts";


const API_BASE_URL = "https://hffwzvbzod.execute-api.ap-southeast-2.amazonaws.com/prod/"

export class ApiProdFactory implements ApiImplementationFactory {

    //Restaurants
    async getRestaurant(id: string): Promise<Restaurant | undefined>{
        try {
            fetch(API_BASE_URL + "restaurants/?id=" + id)
            .then(response => response.json())
            .then(data => {
                console.log("Data returned in request to getRestaurant: " + data);
                return data as Restaurant;
            });
        } catch (e){
            console.error("Failed to get restaurant");
            return undefined;
        }
    };

    async getRestaurants(): Promise<Restaurant[] | undefined>{
        //stub
        return undefined;
    }
    async createRestaurant(Restaurant: Restaurant): Promise<boolean>{
        //stub
        return false;
    };

    //orders
    async getOrder(id: string): Promise<Order | undefined>{
        //stub
        try {
            throw new Error("Method not implemented.");
        } catch (e) {
            console.error("Failed to get order: " + e);
            return undefined;
        }
    };
    async getOrders(customer: Customer): Promise<Order[] | undefined>{ 
        try {
            throw new Error("Method not implemented.");
        } catch (e) {
            console.error("Failed to get orders: " + e);
            return undefined;
        }
    };
    async createOrder(order: Order): Promise<boolean>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to create order: " + error);
            return false;
        }
    };
    async updateOrder(order: Order): Promise<boolean>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to update order: " + error);
            return false;
        }
    }

    //customers
    async getCustomer(id: string): Promise<Customer | undefined>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to get customer: " + error);
            return undefined;
        }
    };
    getCustomers(): Promise<Customer[]>{
        throw new Error("Method not implemented.");
    }; //possibly unnecessary

    async createCustomer(customer: Customer): Promise<boolean>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to create customer: " + error);
            return false;
        }
    }


    async updateCustomer(customer: Customer): Promise<boolean>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to update customer: " + error);
            return false;
        }
    }

    //reviews
    async getReview(id: string): Promise<Review | undefined>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to get review: " + error);
            return undefined;
        }
    };

    async getReviews(): Promise<Review[] | undefined>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to get reviews: " + error);
            return undefined;
        }
    }

    async createReview(review: Review): Promise<boolean>{
        try {
            throw new Error("Method not implemented.")

        } catch (error) {
            console.error("Failed to create review: " + error);
            return false;
        }
    }

    async updateReview(review: Review): Promise<boolean>{
        try {
            throw new Error("Method not implemented.")
        } catch (error) {
            console.error("Failed to update review: " + error);
            return false;
        }
    }
}