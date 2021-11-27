import { Link } from "react-router-dom";
import { Nav } from "./Nav.js";
import { NavMenu } from "./NavMenu.js";
import { AiFillHome } from 'react-icons/ai'
import { BiSearch } from "react-icons/bi";
import { GoPlus, GoStar } from 'react-icons/go'
import { RiMovie2Fill } from 'react-icons/ri'
import { ImTv } from 'react-icons/im'
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.onload = () => {
      document.onwheel = customScrollFunction;

      function customScrollFunction(event) {
        let deltaY = event.deltaY;
        let deltaYSign = Math.sign(deltaY);

        if (deltaYSign === -1) {
          document.getElementById("scrl1").scrollBy({
            top: 0,
            left: -169,
            behavior: "auto",
          });
        } else {
          document.getElementById("scrl1").scrollBy({
            top: 0,
            left: 169,
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
          <picture>
            <img src="/images/logo-disney.svg" alt="Disney plus" />
          </picture>
        </Link>
      </header>
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
      </div>
      <div className="btn-signin">
        <Link to="/">
          <p>LOG IN</p>
        </Link>
      </div>
    </Nav>
  );
}
