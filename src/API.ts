/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRestaurantInput = {
  categories?: Array< FoodCategory | null > | null,
  name: string,
  address: string,
  phone: string,
  averageRating?: number | null,
  averageWaitTime?: number | null,
  description: string,
  id?: string | null,
  restaurantOwnerRestaurantsOwnedId?: string | null,
};

export enum FoodCategory {
  KOREAN = "KOREAN",
  JAPANESE = "JAPANESE",
  VIETNAMESE = "VIETNAMESE",
  CHINESE = "CHINESE",
  THAI = "THAI",
  INDIAN = "INDIAN",
  MIDDLE_EASTERN = "MIDDLE_EASTERN",
  MEDITERRANEAN = "MEDITERRANEAN",
  ITALIAN = "ITALIAN",
  VEGAN = "VEGAN",
  EASTERN = "EASTERN",
  WESTERN = "WESTERN",
  ASIAN = "ASIAN",
  CHICKEN = "CHICKEN",
  BURGER = "BURGER",
  PIZZA = "PIZZA",
}


export type ModelRestaurantConditionInput = {
  categories?: ModelFoodCategoryListInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  averageRating?: ModelFloatInput | null,
  averageWaitTime?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  restaurantOwnerRestaurantsOwnedId?: ModelIDInput | null,
};

export type ModelFoodCategoryListInput = {
  eq?: Array< FoodCategory | null > | null,
  ne?: Array< FoodCategory | null > | null,
  contains?: FoodCategory | null,
  notContains?: FoodCategory | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Restaurant = {
  __typename: "Restaurant",
  categories?: Array< FoodCategory | null > | null,
  name: string,
  address: string,
  phone: string,
  averageRating?: number | null,
  averageWaitTime?: number | null,
  description: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  restaurantOwnerRestaurantsOwnedId?: string | null,
};

export type UpdateRestaurantInput = {
  categories?: Array< FoodCategory | null > | null,
  name?: string | null,
  address?: string | null,
  phone?: string | null,
  averageRating?: number | null,
  averageWaitTime?: number | null,
  description?: string | null,
  id: string,
  restaurantOwnerRestaurantsOwnedId?: string | null,
};

export type DeleteRestaurantInput = {
  id: string,
};

export type CreateOrderInput = {
  status?: Status | null,
  total?: number | null,
  orderDate?: string | null,
  deliveryInstruction: string,
  deliveryAddress: string,
  id?: string | null,
  orderPaymentId?: string | null,
};

export enum Status {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED",
}


export type ModelOrderConditionInput = {
  status?: ModelStatusInput | null,
  total?: ModelFloatInput | null,
  orderDate?: ModelStringInput | null,
  deliveryInstruction?: ModelStringInput | null,
  deliveryAddress?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  orderPaymentId?: ModelIDInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Order = {
  __typename: "Order",
  customer?: Customer | null,
  restaurant?: Restaurant | null,
  items?: ModelMenuItemConnection | null,
  status?: Status | null,
  total?: number | null,
  orderDate?: string | null,
  payment?: Payment | null,
  deliveryInstruction: string,
  deliveryAddress: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  orderPaymentId?: string | null,
};

export type Customer = {
  __typename: "Customer",
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  password: string,
  isMember: boolean,
  cart?: Cart | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  customerCartId?: string | null,
};

export type Cart = {
  __typename: "Cart",
  items?: ModelMenuItemConnection | null,
  total?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelMenuItemConnection = {
  __typename: "ModelMenuItemConnection",
  items:  Array<MenuItem | null >,
  nextToken?: string | null,
};

export type MenuItem = {
  __typename: "MenuItem",
  type?: MenuItemType | null,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  imagePath?: string | null,
  isAvailable: boolean,
  restuarant?: Restaurant | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  orderItemsId?: string | null,
  cartItemsId?: string | null,
};

export enum MenuItemType {
  MAIN = "MAIN",
  SIDE = "SIDE",
  DRINK = "DRINK",
  STARTER = "STARTER",
  DESSERT = "DESSERT",
  POPULAR = "POPULAR",
}


export type Payment = {
  __typename: "Payment",
  amount?: number | null,
  type?: CardType | null,
  last3Digits?: string | null,
  Paid?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export enum CardType {
  VISA = "VISA",
  MASTERCARD = "MASTERCARD",
  AMEX = "AMEX",
  DISCOVER = "DISCOVER",
  PAYPAL = "PAYPAL",
}


export type UpdateOrderInput = {
  status?: Status | null,
  total?: number | null,
  orderDate?: string | null,
  deliveryInstruction?: string | null,
  deliveryAddress?: string | null,
  id: string,
  orderPaymentId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateCustomerInput = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  password: string,
  isMember: boolean,
  id?: string | null,
  customerCartId?: string | null,
};

export type ModelCustomerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  password?: ModelStringInput | null,
  isMember?: ModelBooleanInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  customerCartId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCustomerInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: string | null,
  password?: string | null,
  isMember?: boolean | null,
  id: string,
  customerCartId?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateRestaurantOwnerInput = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  password: string,
  isMember: boolean,
  id?: string | null,
};

export type ModelRestaurantOwnerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  password?: ModelStringInput | null,
  isMember?: ModelBooleanInput | null,
  and?: Array< ModelRestaurantOwnerConditionInput | null > | null,
  or?: Array< ModelRestaurantOwnerConditionInput | null > | null,
  not?: ModelRestaurantOwnerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type RestaurantOwner = {
  __typename: "RestaurantOwner",
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  password: string,
  isMember: boolean,
  restaurantsOwned?: ModelRestaurantConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items:  Array<Restaurant | null >,
  nextToken?: string | null,
};

export type UpdateRestaurantOwnerInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: string | null,
  password?: string | null,
  isMember?: boolean | null,
  id: string,
};

export type DeleteRestaurantOwnerInput = {
  id: string,
};

export type CreateReviewInput = {
  rating: number,
  comment: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelReviewConditionInput = {
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Review = {
  __typename: "Review",
  author?: Customer | null,
  restaurant?: Restaurant | null,
  rating: number,
  comment: string,
  createdAt?: string | null,
  id: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  rating?: number | null,
  comment?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateMenuItemInput = {
  type?: MenuItemType | null,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  imagePath?: string | null,
  isAvailable: boolean,
  id?: string | null,
  orderItemsId?: string | null,
  cartItemsId?: string | null,
};

export type ModelMenuItemConditionInput = {
  type?: ModelMenuItemTypeInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  imagePath?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  and?: Array< ModelMenuItemConditionInput | null > | null,
  or?: Array< ModelMenuItemConditionInput | null > | null,
  not?: ModelMenuItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  orderItemsId?: ModelIDInput | null,
  cartItemsId?: ModelIDInput | null,
};

export type ModelMenuItemTypeInput = {
  eq?: MenuItemType | null,
  ne?: MenuItemType | null,
};

export type UpdateMenuItemInput = {
  type?: MenuItemType | null,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  imagePath?: string | null,
  isAvailable?: boolean | null,
  id: string,
  orderItemsId?: string | null,
  cartItemsId?: string | null,
};

export type DeleteMenuItemInput = {
  id: string,
};

export type CreatePaymentInput = {
  amount?: number | null,
  type?: CardType | null,
  last3Digits?: string | null,
  Paid?: string | null,
  id?: string | null,
};

export type ModelPaymentConditionInput = {
  amount?: ModelFloatInput | null,
  type?: ModelCardTypeInput | null,
  last3Digits?: ModelStringInput | null,
  Paid?: ModelStringInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCardTypeInput = {
  eq?: CardType | null,
  ne?: CardType | null,
};

export type UpdatePaymentInput = {
  amount?: number | null,
  type?: CardType | null,
  last3Digits?: string | null,
  Paid?: string | null,
  id: string,
};

export type DeletePaymentInput = {
  id: string,
};

export type CreateCartInput = {
  total?: number | null,
  id?: string | null,
};

export type ModelCartConditionInput = {
  total?: ModelFloatInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCartInput = {
  total?: number | null,
  id: string,
};

export type DeleteCartInput = {
  id: string,
};

export type ModelRestaurantFilterInput = {
  categories?: ModelFoodCategoryListInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  averageRating?: ModelFloatInput | null,
  averageWaitTime?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
  restaurantOwnerRestaurantsOwnedId?: ModelIDInput | null,
};

export type ModelOrderFilterInput = {
  status?: ModelStatusInput | null,
  total?: ModelFloatInput | null,
  orderDate?: ModelStringInput | null,
  deliveryInstruction?: ModelStringInput | null,
  deliveryAddress?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  orderPaymentId?: ModelIDInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  password?: ModelStringInput | null,
  isMember?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
  customerCartId?: ModelIDInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelRestaurantOwnerFilterInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  password?: ModelStringInput | null,
  isMember?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRestaurantOwnerFilterInput | null > | null,
  or?: Array< ModelRestaurantOwnerFilterInput | null > | null,
  not?: ModelRestaurantOwnerFilterInput | null,
};

export type ModelRestaurantOwnerConnection = {
  __typename: "ModelRestaurantOwnerConnection",
  items:  Array<RestaurantOwner | null >,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type ModelMenuItemFilterInput = {
  type?: ModelMenuItemTypeInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  imagePath?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuItemFilterInput | null > | null,
  or?: Array< ModelMenuItemFilterInput | null > | null,
  not?: ModelMenuItemFilterInput | null,
  orderItemsId?: ModelIDInput | null,
  cartItemsId?: ModelIDInput | null,
};

export type ModelPaymentFilterInput = {
  amount?: ModelFloatInput | null,
  type?: ModelCardTypeInput | null,
  last3Digits?: ModelStringInput | null,
  Paid?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type ModelCartFilterInput = {
  total?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionRestaurantFilterInput = {
  categories?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  averageRating?: ModelSubscriptionFloatInput | null,
  averageWaitTime?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  status?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionFloatInput | null,
  orderDate?: ModelSubscriptionStringInput | null,
  deliveryInstruction?: ModelSubscriptionStringInput | null,
  deliveryAddress?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  orderItemsId?: ModelSubscriptionIDInput | null,
  orderPaymentId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  isMember?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  customerCartId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionRestaurantOwnerFilterInput = {
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  isMember?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestaurantOwnerFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantOwnerFilterInput | null > | null,
  restaurantOwnerRestaurantsOwnedId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionReviewFilterInput = {
  rating?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMenuItemFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  imagePath?: ModelSubscriptionStringInput | null,
  isAvailable?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuItemFilterInput | null > | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  type?: ModelSubscriptionStringInput | null,
  last3Digits?: ModelSubscriptionStringInput | null,
  Paid?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
};

export type ModelSubscriptionCartFilterInput = {
  total?: ModelSubscriptionFloatInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
  cartItemsId?: ModelSubscriptionIDInput | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type CreateRestaurantOwnerMutationVariables = {
  input: CreateRestaurantOwnerInput,
  condition?: ModelRestaurantOwnerConditionInput | null,
};

export type CreateRestaurantOwnerMutation = {
  createRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantOwnerMutationVariables = {
  input: UpdateRestaurantOwnerInput,
  condition?: ModelRestaurantOwnerConditionInput | null,
};

export type UpdateRestaurantOwnerMutation = {
  updateRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantOwnerMutationVariables = {
  input: DeleteRestaurantOwnerInput,
  condition?: ModelRestaurantOwnerConditionInput | null,
};

export type DeleteRestaurantOwnerMutation = {
  deleteRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuItemMutationVariables = {
  input: CreateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type CreateMenuItemMutation = {
  createMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type UpdateMenuItemMutationVariables = {
  input: UpdateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemMutation = {
  updateMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type DeleteMenuItemMutationVariables = {
  input: DeleteMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type DeleteMenuItemMutation = {
  deleteMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      status?: Status | null,
      total?: number | null,
      orderDate?: string | null,
      deliveryInstruction: string,
      deliveryAddress: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      orderPaymentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRestaurantOwnerQueryVariables = {
  id: string,
};

export type GetRestaurantOwnerQuery = {
  getRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantOwnersQueryVariables = {
  filter?: ModelRestaurantOwnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantOwnersQuery = {
  listRestaurantOwners?:  {
    __typename: "ModelRestaurantOwnerConnection",
    items:  Array< {
      __typename: "RestaurantOwner",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      rating: number,
      comment: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuItemQueryVariables = {
  id: string,
};

export type GetMenuItemQuery = {
  getMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type ListMenuItemsQueryVariables = {
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuItemsQuery = {
  listMenuItems?:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      type?: MenuItemType | null,
      name?: string | null,
      price?: number | null,
      description?: string | null,
      imagePath?: string | null,
      isAvailable: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      orderItemsId?: string | null,
      cartItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type OnUpdateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type OnDeleteRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    categories?: Array< FoodCategory | null > | null,
    name: string,
    address: string,
    phone: string,
    averageRating?: number | null,
    averageWaitTime?: number | null,
    description: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    restaurantOwnerRestaurantsOwnedId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    customer?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    total?: number | null,
    orderDate?: string | null,
    payment?:  {
      __typename: "Payment",
      amount?: number | null,
      type?: CardType | null,
      last3Digits?: string | null,
      Paid?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deliveryInstruction: string,
    deliveryAddress: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderPaymentId?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    cart?:  {
      __typename: "Cart",
      total?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    customerCartId?: string | null,
  } | null,
};

export type OnCreateRestaurantOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantOwnerFilterInput | null,
};

export type OnCreateRestaurantOwnerSubscription = {
  onCreateRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantOwnerFilterInput | null,
};

export type OnUpdateRestaurantOwnerSubscription = {
  onUpdateRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantOwnerFilterInput | null,
};

export type OnDeleteRestaurantOwnerSubscription = {
  onDeleteRestaurantOwner?:  {
    __typename: "RestaurantOwner",
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    isMember: boolean,
    restaurantsOwned?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    author?:  {
      __typename: "Customer",
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address: string,
      password: string,
      isMember: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      customerCartId?: string | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    rating: number,
    comment: string,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnCreateMenuItemSubscription = {
  onCreateMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type OnUpdateMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnUpdateMenuItemSubscription = {
  onUpdateMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type OnDeleteMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnDeleteMenuItemSubscription = {
  onDeleteMenuItem?:  {
    __typename: "MenuItem",
    type?: MenuItemType | null,
    name?: string | null,
    price?: number | null,
    description?: string | null,
    imagePath?: string | null,
    isAvailable: boolean,
    restuarant?:  {
      __typename: "Restaurant",
      categories?: Array< FoodCategory | null > | null,
      name: string,
      address: string,
      phone: string,
      averageRating?: number | null,
      averageWaitTime?: number | null,
      description: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      restaurantOwnerRestaurantsOwnedId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    orderItemsId?: string | null,
    cartItemsId?: string | null,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    type?: CardType | null,
    last3Digits?: string | null,
    Paid?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    total?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
