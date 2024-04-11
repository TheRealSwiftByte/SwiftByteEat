import { FoodCategory, MenuItem } from "./db.types";

export class Restaurant {
    constructor(
        public id: string,
        public categories: FoodCategory[],
        public name: string,
        public address: string,
        public phone: string,
        public averageRating: number,
        public averageWaitTime: number,
        public menu: MenuItem[],
        public description: string
    ) { }
}