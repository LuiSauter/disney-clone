import { useEffect, useState } from "react"
import { onAuthStateChange } from "../client/firebase"

export const useUser = () => {
  const [userLogget, setUserLogget] = useState(undefined);
  useEffect(() => {
    let unsubscribe;
    if (!userLogget) {
      onAuthStateChange((data) => {
        unsubscribe = setUserLogget(data);
      });
    }
    return () => unsubscribe && unsubscribe();
  }, [userLogget]);

  return { userLogget };
}