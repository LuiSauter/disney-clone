import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChange } from "../client/firebase";

const userContext = createContext();

export const useUserContext = () => useContext(userContext)

export const UserStateProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(undefined);
  const [userLogget, setUserLogget] = useState(undefined);
  useEffect(() => {
    let unsubscribe;
    if (!userLogget) {
      return onAuthStateChange((data) => {
        if (data) setIsLogged(true);
        unsubscribe = setUserLogget(data);
      });
    }
    return () => unsubscribe && unsubscribe();
  }, [userLogget]);
  return (
    <userContext.Provider
      value={{ isLogged, userLogget, setIsLogged, setUserLogget }}
    >
      {children}
    </userContext.Provider>
  );
}