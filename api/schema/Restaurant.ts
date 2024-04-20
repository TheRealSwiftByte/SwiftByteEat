import Realm, {BSON} from 'realm';

enum FoodCategory {
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

export class Restaurant extends Realm.Object<Restaurant> {
    _id!: BSON.ObjectId;
    categories!: FoodCategory[];
    name!: string;
    address!: string;
    phone!: string;
    averageRating!: number;
    averageWaitTime!: number;
    description!: string;

    schema = {
        name: 'Restaurant',
        properties: {
            _id: 'objectId',
            categories: 'FoodCategory[]',
            name: 'string',
            address: 'string',
            phone: 'string',
            averageRating: 'double',
            averageWaitTime: 'double',
            description: 'string',
        },
        primaryKey: '_id'
    }
}