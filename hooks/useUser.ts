import { User } from "@/contextManager";
import { Card } from "@/mock_data";
import { useState } from "react";

export interface useUserReturn {
  user: User | null;
  setName: (firstName: string, lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: number) => void;
  setAddress: (address: string) => void;
  setPassword: (password: string) => void;
  setIsMember: (isMember: boolean) => void;
  addCard: (newCard: Card) => void;
}

export const useUser = (): useUserReturn => {
  const [user, setUser] = useState<User>(null as any);

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
      email,
    }));
  };

  const setPhone = (phone: number) => {
    setUser((prevUser) => ({
      ...prevUser,
      phone,
    }));
  };

  const setAddress = (address: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      address,
    }));
  };

  const setPassword = (password: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      password,
    }));
  };

  const setIsMember = (isMember: boolean) => {
    setUser((prevUser) => ({
      ...prevUser,
      isMember,
    }));
  };

  const addCard = (newCard: Card) => {
    setUser((prevUser) => ({
      ...prevUser,
      cards: [...(prevUser?.cards || []), newCard],
    }));
  };

  return {
    user,
    setName,
    setEmail,
    setPhone,
    setAddress,
    setPassword,
    setIsMember,
    addCard,
  };
};
