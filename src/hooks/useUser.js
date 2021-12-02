import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, signOutWithGoogle } from "../client/firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useUserContext } from "../context/userContext";

export const useUser = () => {
  const { isLogged, userLogget, setIsLogged, setUserLogget } = useUserContext();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useNavigate();

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
          setUserLogget(null);
          history("../");
        })
        .catch((err) => console.error(err));
    }
  };

  return { isLogged, handleAuth, userPhoto, userName, userLogget };
};
