import { useEffect, useState } from "react"
import { onAuthStateChange } from "../client/firebase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, signOutWithGoogle } from "../client/firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

export const useUser = () => {
  const [userLogget, setUserLogget] = useState(undefined);
  const [isLogged, setIsLogged] = useState(true);

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    let unsubscribe;
    if (!userLogget) {
      return onAuthStateChange((data) => {
        return (unsubscribe = setUserLogget(data));
      });
    }
    return () => unsubscribe && unsubscribe();
  }, [userLogget]);

  useEffect(() => {
    if (userLogget) {
      dispatch(
        setUserLoginDetails({
          name: userLogget.name,
          email: userLogget.email,
          photo: userLogget.photo,
          uid: userLogget.uid,
        })
      );
    }
  }, [dispatch, userLogget]);

  const handleAuth = () => {
    if (!userName) {
      loginWithGoogle()
        .then(() => setIsLogged(true))
        .catch((err) => console.error(err));
    } else if (userName) {
      signOutWithGoogle()
        .then(() => {
          dispatch(setSignOutState());
          setIsLogged(false);
          history("../");
        })
        .catch((err) => console.error(err));
    }
  };

  return { isLogged, handleAuth, userPhoto, userName };
}