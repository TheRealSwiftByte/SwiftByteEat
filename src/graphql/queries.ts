/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRestaurant = /* GraphQL */ `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRestaurantQueryVariables,
  APITypes.GetRestaurantQuery
>;
export const listRestaurants = /* GraphQL */ `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestaurantsQueryVariables,
  APITypes.ListRestaurantsQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      status
      total
      orderDate
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getRestaurantOwner = /* GraphQL */ `query GetRestaurantOwner($id: ID!) {
  getRestaurantOwner(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRestaurantOwnerQueryVariables,
  APITypes.GetRestaurantOwnerQuery
>;
export const listRestaurantOwners = /* GraphQL */ `query ListRestaurantOwners(
  $filter: ModelRestaurantOwnerFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurantOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestaurantOwnersQueryVariables,
  APITypes.ListRestaurantOwnersQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
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
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      rating
      comment
      createdAt
      id
      updatedAt
      restaurantReviewsId
      customerReviewsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const getMenuItem = /* GraphQL */ `query GetMenuItem($id: ID!) {
  getMenuItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMenuItemQueryVariables,
  APITypes.GetMenuItemQuery
>;
export const listMenuItems = /* GraphQL */ `query ListMenuItems(
  $filter: ModelMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      type
      name
      price
      description
      imagePath
      isAvailable
      id
      createdAt
      updatedAt
      restaurantMenuId
      orderItemsId
      cartItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenuItemsQueryVariables,
  APITypes.ListMenuItemsQuery
>;
export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      amount
      type
      last3Digits
      Paid
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
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
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      total
      id
      createdAt
      updatedAt
      cartCustomerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
