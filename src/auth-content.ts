import { User } from "screens/project-list/search-panel";
import React, { useState, createContext } from "react";
import * as auth from "auth-provide";
interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      loginOut: (form: AuthForm) => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

// point free
export const AuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);

  const register = (form: AuthForm) => auth.register(form).then(setUser);

  const logout = () => auth.loginOut().then(() => setUser(null));

  return <AuthContext.Provider value={{ user, login, register, logout }} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在provide中使用");
  }
  return context;
};
