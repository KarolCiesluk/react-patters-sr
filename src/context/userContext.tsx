import { createContext } from "react";

export interface User {
  email: string;
  isAdmin: boolean;
}

export const UserContext = createContext({} as User);