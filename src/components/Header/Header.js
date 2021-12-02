import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

import { NavMenu } from "./NavMenu.js";
import { Nav } from "./Nav.js";

import { GoPlus, GoStar } from "react-icons/go";
import { RiMovie2Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImTv } from "react-icons/im";
import { DropDown } from "../DropDown/DropDown";

export default function Header() {
  const { isLogged, handleAuth, userPhoto, userName, userLogget } = useUser();
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
            left: -39,
            behavior: "auto",
          });
        } else if (deltaYSign === 1) {
          document.getElementById("scrl1").scrollBy({
            top: 0,
            left: 39,
            behavior: "auto",
          });
        }
      }
    };
  }, []);
  return (
    <Nav>
      <header>
        <Link to="/">
          <figure>
            <img src="/images/logo-disney.svg" alt="Disney plus" />
          </figure>
        </Link>
      </header>
      {userLogget === null ? (
        <div className="btn-signin">
          <button onClick={handleAuth}>
            <p>LOG IN</p>
          </button>
        </div>
      ) : (
        <>
          <div className="scroll-container" id="scrl1">
            <NavMenu>
              <Link to="/home">
                <AiFillHome />
                <span>HOME</span>
              </Link>
              <Link to="#">
                <BiSearch />
                <span>SEARCH</span>
              </Link>
              <Link to="#">
                <GoPlus />
                <span>WATCHLIST</span>
              </Link>
              <Link to="#">
                <GoStar />
                <span>ORIGINALS</span>
              </Link>
              <Link to="#">
                <RiMovie2Fill />
                <span>MOVIES</span>
              </Link>
              <Link to="#">
                <ImTv />
                <span>SERIES</span>
              </Link>
            </NavMenu>
          </div>
          {isLogged && (
            <figure>
              <img
                onClick={handleAuth}
                src={userPhoto}
                alt={userName}
                className="img-user"
              />
              <DropDown>
                <span>Sign Out</span>
              </DropDown>
            </figure>
          )}
        </>
      )}
    </Nav>
  );
}
