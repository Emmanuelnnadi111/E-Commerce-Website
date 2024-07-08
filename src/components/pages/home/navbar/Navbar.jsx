import { NavLink, useLocation } from "react-router-dom";
import { navlinks } from "./navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMobile = () => {
    setOpen(!open);
  };
  const location = useLocation();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Exclusive</h1>
        {/* Desktop items */}
        <ul className="hidden lg:flex items-center gap-10">
          {navlinks.map((links, index) => (
            <li
              className={
                location.pathname === links.href
                  ? "border-b border-b-footerCol"
                  : ""
              }
              key={index}
            >
              <NavLink to={links.href}>{links.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-6 items-center ">
          <div className="flex items-center w-full px-3 border bg-searchBg  rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none border-0  w-full placeholder:text-sm"
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <button onClick={openMobile} className=" md:text-2xl lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* mobile items */}
      <ul
        className={
          !open
            ? "border rounded-md bg-slate-500 text-secondaryWhite flex flex-col w-48 ml-auto text-center gap-5 mt-5 lg:hidden"
            : "hidden "
        }
      >
        {navlinks.map((links, index) => (
          <li
            className={
              location.pathname === links.href
                ? "border-b border-b-secondaryWhite w-20 text-center m-auto"
                : ""
            }
            key={index}
          >
            <NavLink to={links.href}>{links.name}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
