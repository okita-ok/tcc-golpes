"use client";

import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Auth } from "../types/auth";

interface AuthContextType {
  auth: Auth | null;
  setAuth: Dispatch<SetStateAction<Auth | null>>;
}

const defaultAuthContext: AuthContextType = {
  auth: null,
  setAuth: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      setAuth(JSON.parse(localAuth));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
