import React, { useState, useEffect } from "react";
import avtar from "./../../images/undraw_pic_profile_re_7g2h.svg";
import logo from "../../images/logo.png";
import "./Header_style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [bars, setBars] = useState(true);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleClick = () => {
    setBars(!bars);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUser({});
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("username"));
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(loggedInUser);
      navigate("/");
    } else {
      setIsLoggedIn(false);
      setUser({});
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-[100%] border ">
        <nav
          className={`nav w-[100%]  shadow-md  ${
            isNavbarFixed ? "fixed" : ""
          } ${isNavbarFixed ? "move-up" : ""}`}
        >
          <div className="container text-[14px] mx-auto flex justify-between item-center">
            <div className="">
              <Link to="/">
                <img src={logo} className="w-[120px]" alt="" />
              </Link>
            </div>
            <div className={`nav_bar ${bars ? "" : "active"}`}>
              <ul>
                <li>
                  <NavLink to="/" className="">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                {user.role == "Doctor" ? (
                  <li>
                    <NavLink to="/patients">Patients</NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/doctors">Doctors</NavLink>
                  </li>
                )}

                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to="/"
                        className="nav-item nav-link"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </li>
                    <li>
                      <h1 className="text-red-400 underline font-bold ml-10">
                        {user.role} {user.name}
                      </h1>
                    </li>
                    <li>
                      <img
                        src={avtar}
                        alt=""
                        className="w-[30px] h-[30px] rounded"
                      />
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                )}
                <button className="rounded-2xl pl py-2 px-4 text-white bg-[#1977CC]">
                  <a href="">Make an appointment</a>
                </button>
              </ul>
            </div>
            <div
              className={`text-3xl text-[#717ce0] ${!bars ? "block" : ""}`}
              id="mobile"
              onClick={handleClick}
            >
              <i className={bars ? "fas fa-bars" : "fas fa-times"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
