
export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  menu: MenuItem[];
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface Payment {
  id: string;
  amount: number;
  type: 'card' | 'paypal';
  last3Digits?: string;
  datePaid: Date;
}

export interface Cart {
  id: string;
  restaurant: Restaurant;
  items: MenuItem[];
  promoCode: string;
  netTotal: string;
}

export interface Order {
  id: string;
  customer: Customer;
  restaurant: Restaurant;
  items: MenuItem[];
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  total: number;
  tax: number;
  netTotal: number;
  promoCode: string;
  discount: number;
  orderDate: Date;
  payment: Payment;
  deliveryInstruction: string;
  deliveryAddress: string;
}


// EXAMPLE DATA
export const categories: Category[] = [
  {
    id: 1,
    name: 'Seafood',
    imageUrl: 'https://images.pexels.com/photos/566343/pexels-photo-566343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Fast Food',
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Japanese',
    imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Dessert',
    imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Korean',
    imageUrl: 'https://images.pexels.com/photos/5773968/pexels-photo-5773968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Vegetarian',
    imageUrl: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    name: 'Fruits',
    imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    name: 'Snacks',
    imageUrl: 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

export const restaurants: Restaurant[] = [
  {
      id: 1,
      name: 'Kinn Thai',
      description: 'Free delivery on order above $35',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      menu: [
          { id: '304', name: 'Margherita Pizza', description: 'Classic tomato sauce, mozzarella, basil', price: 10.99, imageUrl: 'margherita.jpg' },
          { id: '304', name: 'Pepperoni Pizza', description: 'Tomato sauce, mozzarella, pepperoni slices', price: 12.99, imageUrl: 'pepperoni.jpg' },
          // More menu items...
      ],
      address: {
          street: '456 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001'
      }
  },
  {
      id: 2,
      name: 'Diggies',
      description: 'Free delivery on order above $20. Free Ice Cream during public holiday',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuSukk8gKjQvpguurAbU340D8Qw7U7jINgdKWpZXsZA&s',
      menu: [
          { id: '201', name: 'California Roll', description: 'Crab, avocado, cucumber, and sesame seeds', price: 8.99, imageUrl: 'california-roll.jpg' },
          { id: '202', name: 'Spicy Tuna Roll', description: 'Tuna, spicy mayo, cucumber, and tobiko', price: 9.99, imageUrl: 'spicy-tuna.jpg' },
          // More menu items...
      ],
      address: {
          street: '789 Elm St',
          city: 'Los Angeles',
          state: 'CA',
          zipCode: '90001'
      }
  },
  {
    id: 3,
    name: 'Hong Kong Chef',
    description: 'Free delivery on order above $20. Free Ice Cream during public holiday',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/14/29/52/54/hong-teh-chinese-restaurant.jpg',
    menu: [
        { id: '208', name: 'California Roll', description: 'Crab, avocado, cucumber, and sesame seeds', price: 8.99, imageUrl: 'california-roll.jpg' },
        { id: '209', name: 'Spicy Tuna Roll', description: 'Tuna, spicy mayo, cucumber, and tobiko', price: 9.99, imageUrl: 'spicy-tuna.jpg' },
        // More menu items...
    ],
    address: {
        street: '789 Elm St',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90001'
    }
},
];

export const menuItems: MenuItem[] = [
  {
    id: '100',
    name: 'Cheeseburger',
    description: 'Juicy beef patty with melted cheese, lettuce, and tomato on a sesame seed bun.',
    price: 8.99,
    imageUrl: 'https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '101',
    name: 'Chicken Caesar Salad',
    description: 'Fresh romaine lettuce topped with grilled chicken breast, parmesan cheese, and Caesar dressing.',
    price: 10.49,
    imageUrl: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '102',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza topped with tomato sauce, fresh mozzarella, and basil leaves.',
    price: 12.99,
    imageUrl: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '103',
    name: 'Chocolate Brownie Sundae',
    description: 'Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.',
    price: 6.99,
    imageUrl: 'https://images.pexels.com/photos/5386659/pexels-photo-5386659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const items: MenuItem[] = [
  menuItems[1], 
  menuItems[3], 
  menuItems[2], 
  menuItems[1],
  menuItems[0], 
  menuItems[0], 
  menuItems[2], 
  menuItems[0]
]

export const cart: Cart = {
  id: '987654321',
  restaurant: restaurants[1],
  items: items,
  promoCode: 'FREESHIP',
  netTotal: '15'
};
