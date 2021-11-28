import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginWithGoogle} from '../../client/firebase'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails
} from "../../features/user/userSlice";

import { NavMenu } from "./NavMenu.js";
import { Nav } from "./Nav.js";

import { GoPlus, GoStar } from 'react-icons/go'
import { RiMovie2Fill } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'
import { BiSearch } from "react-icons/bi";
import { ImTv } from 'react-icons/im'

export default function Header() {
  useEffect(() => {
    window.onload = () => {
      document.onwheel = customScrollFunction;
      function customScrollFunction(event) {
        let deltaY = event.deltaY;
        let deltaYSign = Math.sign(deltaY);
        const scroll = document.getElementById("scrl1");
        if (!scroll) return null;
        if (deltaYSign === -1) {
          document.getElementById("scrl1").scrollBy({
            top: 0,
            left: -169,
            behavior: "auto",
          });
        } else if (deltaYSign === 1) {
          document.getElementById("scrl1").scrollBy({
            top: 0,
            left: 169,
            behavior: "auto",
          });
        }
      }
    };
  }, []);
  const history = useNavigate();
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const dispatch = useDispatch();

  const handleAuth = () => {
    loginWithGoogle()
    .then(result => {
      const { displayName, email, photoURL } = result.user;
      setUser({ displayName, email, photoURL });
    })
    .catch(err => console.error(err))
  }

  const setUser = ({ displayName, email, photoURL }) => {
    dispatch(
      setUserLoginDetails({
        name: displayName,
        email: email,
        photo: photoURL,
      })
    );
  };

  return (
    <Nav>
      <header>
        <Link to="/">
          <picture>
            <img src="/images/logo-disney.svg" alt="Disney plus" />
          </picture>
        </Link>
      </header>
      {!userName ? (
        <div className="btn-signin">
          <button onClick={handleAuth}>
            <p>LOG IN</p>
          </button>
        </div>
      ) : (
        <>
          <div className="scroll-container" id="scrl1">
            <NavMenu>
              <Link to="/">
                <AiFillHome />
                <span>HOME</span>
              </Link>
              <Link to="/">
                <BiSearch />
                <span>SEARCH</span>
              </Link>
              <Link to="/">
                <GoPlus />
                <span>WATCHLIST</span>
              </Link>
              <Link to="/">
                <GoStar />
                <span>ORIGINALS</span>
              </Link>
              <Link to="/">
                <RiMovie2Fill />
                <span>MOVIES</span>
              </Link>
              <Link to="/">
                <ImTv />
                <span>SERIES</span>
              </Link>
            </NavMenu>
            <img src={userPhoto} alt={userName} />
          </div>
        </>
      )}
    </Nav>
  );
}
