/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRestaurant = /* GraphQL */ `mutation CreateRestaurant(
  $input: CreateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  createRestaurant(input: $input, condition: $condition) {
    categories
    name
    address
    phone
    averageRating
    averageWaitTime
    description
    owner {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      __typename
    }
    menu {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    restaurantOwnerRestaurantsOwnedId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRestaurantMutationVariables,
  APITypes.CreateRestaurantMutation
>;
export const updateRestaurant = /* GraphQL */ `mutation UpdateRestaurant(
  $input: UpdateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  updateRestaurant(input: $input, condition: $condition) {
    categories
    name
    address
    phone
    averageRating
    averageWaitTime
    description
    owner {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      __typename
    }
    menu {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    restaurantOwnerRestaurantsOwnedId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRestaurantMutationVariables,
  APITypes.UpdateRestaurantMutation
>;
export const deleteRestaurant = /* GraphQL */ `mutation DeleteRestaurant(
  $input: DeleteRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  deleteRestaurant(input: $input, condition: $condition) {
    categories
    name
    address
    phone
    averageRating
    averageWaitTime
    description
    owner {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      __typename
    }
    menu {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    restaurantOwnerRestaurantsOwnedId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRestaurantMutationVariables,
  APITypes.DeleteRestaurantMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    customer {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    restaurant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    items {
      nextToken
      __typename
    }
    status
    total
    orderDate
    payment {
      amount
      type
      last3Digits
      Paid
      id
      createdAt
      updatedAt
      __typename
    }
    deliveryInstruction
    deliveryAddress
    id
    createdAt
    updatedAt
    restaurantOrdersId
    customerOrdersId
    orderPaymentId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    customer {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    restaurant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    items {
      nextToken
      __typename
    }
    status
    total
    orderDate
    payment {
      amount
      type
      last3Digits
      Paid
      id
      createdAt
      updatedAt
      __typename
    }
    deliveryInstruction
    deliveryAddress
    id
    createdAt
    updatedAt
    restaurantOrdersId
    customerOrdersId
    orderPaymentId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    customer {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    restaurant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    items {
      nextToken
      __typename
    }
    status
    total
    orderDate
    payment {
      amount
      type
      last3Digits
      Paid
      id
      createdAt
      updatedAt
      __typename
    }
    deliveryInstruction
    deliveryAddress
    id
    createdAt
    updatedAt
    restaurantOrdersId
    customerOrdersId
    orderPaymentId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
    firstName
    lastName
    email
    phone
    address
    password
    isMember
    cart {
      total
      id
      createdAt
      updatedAt
      cartCustomerId
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    customerCartId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
    firstName
    lastName
    email
    phone
    address
    password
    isMember
    cart {
      total
      id
      createdAt
      updatedAt
      cartCustomerId
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    customerCartId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
    firstName
    lastName
    email
    phone
    address
    password
    isMember
    cart {
      total
      id
      createdAt
      updatedAt
      cartCustomerId
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    customerCartId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createRestaurantOwner = /* GraphQL */ `mutation CreateRestaurantOwner(
  $input: CreateRestaurantOwnerInput!
  $condition: ModelRestaurantOwnerConditionInput
) {
  createRestaurantOwner(input: $input, condition: $condition) {
    firstName
    lastName
    email
    phone
    address
    password
    isMember
    restaurantsOwned {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRestaurantOwnerMutationVariables,
  APITypes.CreateRestaurantOwnerMutation
>;
export const updateRestaurantOwner = /* GraphQL */ `mutation UpdateRestaurantOwner(
  $input: UpdateRestaurantOwnerInput!
  $condition: ModelRestaurantOwnerConditionInput
) {
  updateRestaurantOwner(input: $input, condition: $condition) {
    firstName
    lastName
    email
    phone
    address
    password
    isMember
    restaurantsOwned {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRestaurantOwnerMutationVariables,
  APITypes.UpdateRestaurantOwnerMutation
>;
export const deleteRestaurantOwner = /* GraphQL */ `mutation DeleteRestaurantOwner(
  $input: DeleteRestaurantOwnerInput!
  $condition: ModelRestaurantOwnerConditionInput
) {
  deleteRestaurantOwner(input: $input, condition: $condition) {
    firstName
    lastName
    email
    phone
    address
    password
    isMember
    restaurantsOwned {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRestaurantOwnerMutationVariables,
  APITypes.DeleteRestaurantOwnerMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
    author {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    restaurant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    rating
    comment
    createdAt
    id
    updatedAt
    restaurantReviewsId
    customerReviewsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
    author {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    restaurant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    rating
    comment
    createdAt
    id
    updatedAt
    restaurantReviewsId
    customerReviewsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
    author {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    restaurant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    rating
    comment
    createdAt
    id
    updatedAt
    restaurantReviewsId
    customerReviewsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createMenuItem = /* GraphQL */ `mutation CreateMenuItem(
  $input: CreateMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  createMenuItem(input: $input, condition: $condition) {
    type
    name
    price
    description
    imagePath
    isAvailable
    restuarant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    id
    createdAt
    updatedAt
    restaurantMenuId
    orderItemsId
    cartItemsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMenuItemMutationVariables,
  APITypes.CreateMenuItemMutation
>;
export const updateMenuItem = /* GraphQL */ `mutation UpdateMenuItem(
  $input: UpdateMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  updateMenuItem(input: $input, condition: $condition) {
    type
    name
    price
    description
    imagePath
    isAvailable
    restuarant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    id
    createdAt
    updatedAt
    restaurantMenuId
    orderItemsId
    cartItemsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMenuItemMutationVariables,
  APITypes.UpdateMenuItemMutation
>;
export const deleteMenuItem = /* GraphQL */ `mutation DeleteMenuItem(
  $input: DeleteMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  deleteMenuItem(input: $input, condition: $condition) {
    type
    name
    price
    description
    imagePath
    isAvailable
    restuarant {
      categories
      name
      address
      phone
      averageRating
      averageWaitTime
      description
      id
      createdAt
      updatedAt
      restaurantOwnerRestaurantsOwnedId
      __typename
    }
    id
    createdAt
    updatedAt
    restaurantMenuId
    orderItemsId
    cartItemsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMenuItemMutationVariables,
  APITypes.DeleteMenuItemMutation
>;
export const createPayment = /* GraphQL */ `mutation CreatePayment(
  $input: CreatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  createPayment(input: $input, condition: $condition) {
    amount
    type
    last3Digits
    Paid
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePaymentMutationVariables,
  APITypes.CreatePaymentMutation
>;
export const updatePayment = /* GraphQL */ `mutation UpdatePayment(
  $input: UpdatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  updatePayment(input: $input, condition: $condition) {
    amount
    type
    last3Digits
    Paid
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentMutationVariables,
  APITypes.UpdatePaymentMutation
>;
export const deletePayment = /* GraphQL */ `mutation DeletePayment(
  $input: DeletePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  deletePayment(input: $input, condition: $condition) {
    amount
    type
    last3Digits
    Paid
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePaymentMutationVariables,
  APITypes.DeletePaymentMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $input: CreateCartInput!
  $condition: ModelCartConditionInput
) {
  createCart(input: $input, condition: $condition) {
    customer {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    items {
      nextToken
      __typename
    }
    total
    id
    createdAt
    updatedAt
    cartCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
    customer {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    items {
      nextToken
      __typename
    }
    total
    id
    createdAt
    updatedAt
    cartCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $input: DeleteCartInput!
  $condition: ModelCartConditionInput
) {
  deleteCart(input: $input, condition: $condition) {
    customer {
      firstName
      lastName
      email
      phone
      address
      password
      isMember
      id
      createdAt
      updatedAt
      customerCartId
      __typename
    }
    items {
      nextToken
      __typename
    }
    total
    id
    createdAt
    updatedAt
    cartCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
