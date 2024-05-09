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

export function UserContextProvider({ children }: any) {
  const value = useUser();

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
