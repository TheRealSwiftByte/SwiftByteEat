/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRestaurant = /* GraphQL */ `subscription OnCreateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onCreateRestaurant(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantSubscriptionVariables,
  APITypes.OnCreateRestaurantSubscription
>;
export const onUpdateRestaurant = /* GraphQL */ `subscription OnUpdateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onUpdateRestaurant(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantSubscriptionVariables,
  APITypes.OnUpdateRestaurantSubscription
>;
export const onDeleteRestaurant = /* GraphQL */ `subscription OnDeleteRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onDeleteRestaurant(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantSubscriptionVariables,
  APITypes.OnDeleteRestaurantSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
    orderPaymentId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
    orderPaymentId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
    orderPaymentId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
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
      __typename
    }
    id
    createdAt
    updatedAt
    customerCartId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
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
      __typename
    }
    id
    createdAt
    updatedAt
    customerCartId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
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
      __typename
    }
    id
    createdAt
    updatedAt
    customerCartId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateRestaurantOwner = /* GraphQL */ `subscription OnCreateRestaurantOwner(
  $filter: ModelSubscriptionRestaurantOwnerFilterInput
) {
  onCreateRestaurantOwner(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantOwnerSubscriptionVariables,
  APITypes.OnCreateRestaurantOwnerSubscription
>;
export const onUpdateRestaurantOwner = /* GraphQL */ `subscription OnUpdateRestaurantOwner(
  $filter: ModelSubscriptionRestaurantOwnerFilterInput
) {
  onUpdateRestaurantOwner(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantOwnerSubscriptionVariables,
  APITypes.OnUpdateRestaurantOwnerSubscription
>;
export const onDeleteRestaurantOwner = /* GraphQL */ `subscription OnDeleteRestaurantOwner(
  $filter: ModelSubscriptionRestaurantOwnerFilterInput
) {
  onDeleteRestaurantOwner(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantOwnerSubscriptionVariables,
  APITypes.OnDeleteRestaurantOwnerSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateMenuItem = /* GraphQL */ `subscription OnCreateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
  onCreateMenuItem(filter: $filter) {
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
    orderItemsId
    cartItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMenuItemSubscriptionVariables,
  APITypes.OnCreateMenuItemSubscription
>;
export const onUpdateMenuItem = /* GraphQL */ `subscription OnUpdateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
  onUpdateMenuItem(filter: $filter) {
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
    orderItemsId
    cartItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMenuItemSubscriptionVariables,
  APITypes.OnUpdateMenuItemSubscription
>;
export const onDeleteMenuItem = /* GraphQL */ `subscription OnDeleteMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
  onDeleteMenuItem(filter: $filter) {
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
    orderItemsId
    cartItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMenuItemSubscriptionVariables,
  APITypes.OnDeleteMenuItemSubscription
>;
export const onCreatePayment = /* GraphQL */ `subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onCreatePayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePaymentSubscriptionVariables,
  APITypes.OnCreatePaymentSubscription
>;
export const onUpdatePayment = /* GraphQL */ `subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onUpdatePayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePaymentSubscriptionVariables,
  APITypes.OnUpdatePaymentSubscription
>;
export const onDeletePayment = /* GraphQL */ `subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onDeletePayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePaymentSubscriptionVariables,
  APITypes.OnDeletePaymentSubscription
>;
export const onCreateCart = /* GraphQL */ `subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
  onCreateCart(filter: $filter) {
    items {
      nextToken
      __typename
    }
    total
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
  onUpdateCart(filter: $filter) {
    items {
      nextToken
      __typename
    }
    total
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
  onDeleteCart(filter: $filter) {
    items {
      nextToken
      __typename
    }
    total
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
