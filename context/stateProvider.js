import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// export function AuthUserProvider({ children }) {
//   const authState = useFirebaseAuth();
//   return (
//     <authUserContext.Provider value={authState}>
//       {children}
//     </authUserContext.Provider>
//   );
// }

// export const useAuth = () => useContext(authUserContext);
