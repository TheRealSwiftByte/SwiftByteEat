import { createContext, useState } from "react";
import { Card } from "./mock_data";
import { useUser, useUserReturn } from "./hooks/useUser";

//Interface Type for my
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  password: string;
  isMember: boolean;
  cards: Card[];
  setName: (firstName: string, lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: number) => void;
  setAddress: (address: string) => void;
  setPassword: (password: string) => void;
  setIsMember: (isMember: boolean) => void;
  addCard: (newCard: Card) => void;
}

//const UserContext = createContext<User | null>(null);
const UserContext = createContext<useUserReturn>(null as any);

function UserProvider({ children }: any) {
  // const [user, setUser] = useState<User>(null as any);

  // const setName = (firstName: string, lastName: string) => {
  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         firstName,
  //         lastName,
  //   }));
  // };

  // const setEmail = (email: string) => {
  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         email
  //     }));
  // };

  // const setPhone = (phone: number) => {
  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         phone
  //     }));
  // };

  // const setAddress = (address: string) => {
  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         address
  //     }));
  // };

  // const setPassword = (password: string) => {
  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         password
  //     }));
  // };

  // const setIsMember = (isMember: boolean) => {
  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         isMember
  //     }));
  // };

  // const addCard = (newCard: Card) => {
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     cards: [...(prevUser?.cards || []), newCard],
  //   }));
  // };

  // const value = user ? { ...user, setName, setEmail, setAddress, setPassword, setIsMember, addCard} : null;

  const value = useUser();

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
