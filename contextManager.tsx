import { createContext, useState } from 'react';
import { Card } from './mock_data';

//Interface Type for my 
export interface user {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: number
    address: string
    password: string
    isMember: boolean
    cards: Card[]
    setName: (firstName: string, lastName: string) => void
    setEmail: (email: string) => void
    setPhone: (phone: number) => void
    setAddress: (address: string) => void
    setPassword: (password: string) => void
    setIsMember: (isMember: boolean) => void
    addCard: (newCard: Card) => void
}

const UserContext = createContext<user | null>(null);

function UserProvider({ children }: any) {
    const [user, setUser] = useState<user>(null as any);
  
    const setName = (firstName: string, lastName: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            firstName,
            lastName,
      }));
    };

    const setEmail = (email: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            email
        }));
    };

    const setPhone = (phone: number) => {
        setUser((prevUser) => ({
            ...prevUser,
            phone
        }));
    };
  
    const setAddress = (address: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            address
        }));
    };

    const setPassword = (password: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            password
        }));
    };

    const setIsMember = (isMember: boolean) => {
        setUser((prevUser) => ({
            ...prevUser,
            isMember
        }));
    };

    const addCard = (newCard: Card) => {
      setUser((prevUser) => ({
        ...prevUser,
        cards: [...(prevUser?.cards || []), newCard],
      }));
    };
  
    const value = user ? { ...user, setName, setEmail, setAddress, setPassword, setIsMember, addCard} : null;
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  }
