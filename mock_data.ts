
export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

export interface MenuItem {
  id: number;
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
          { id: 1, name: 'Margherita Pizza', description: 'Classic tomato sauce, mozzarella, basil', price: 10.99, imageUrl: 'margherita.jpg' },
          { id: 2, name: 'Pepperoni Pizza', description: 'Tomato sauce, mozzarella, pepperoni slices', price: 12.99, imageUrl: 'pepperoni.jpg' },
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
          { id: 1, name: 'California Roll', description: 'Crab, avocado, cucumber, and sesame seeds', price: 8.99, imageUrl: 'california-roll.jpg' },
          { id: 2, name: 'Spicy Tuna Roll', description: 'Tuna, spicy mayo, cucumber, and tobiko', price: 9.99, imageUrl: 'spicy-tuna.jpg' },
          // More menu items...
      ],
      address: {
          street: '789 Elm St',
          city: 'Los Angeles',
          state: 'CA',
          zipCode: '90001'
      }
  },
  // Add more restaurants here...
];
