import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "../lib/userFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInEmailPass: async () => {},
  signUpEmail: async () => {},
  signOutAndClear: async () => {},
});

export function AuthUserProvider({ children }) {
  const authState = useFirebaseAuth();
  return (
    <authUserContext.Provider value={authState}>
      {children}
    </authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
