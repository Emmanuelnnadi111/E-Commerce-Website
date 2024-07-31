import { faHeart, faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons/faCircleXmark";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FirstSection from "../pages/home/sections/FirstSection";
import Header from "../header/Header";
import SecondSection from "../pages/home/sections/SecondSection";
import ThirdSection from "../pages/home/sections/ThirdSection";
import FourthSection from "../pages/home/sections/FourthSection";
import FifthSection from "../pages/home/sections/FifthSection";
import SixthSection from "../pages/home/sections/SixthSection";
import SeventhSection from "../pages/home/sections/SeventhSection";
import EightSection from "../pages/home/sections/EightSection";
import Footer from "../footer/Footer";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "../pages/home/navbar/navlinks";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const accountitem = [
  { name: "Manage My Account", icon: faUser },
  { name: "My Order", icon: faBagShopping },
  { name: "My Cancellations", icon: faCircleXmark },
  { name: "My Reviews", icon: faStar },
  { name: "Logout" },
];

const AccountDropDown = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const openMobile = () => {
    setOpen(!open);
  };
  const openAccountDropdown = () => {
    setOpenAccount(!openAccount);
  };
  const handleActive = (index) => {
    setActiveIndex(index);
  };
  const openCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="">
        <Header />
        <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%]">
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
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-footerCol text-opacity-30"
                />
              </div>
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faCartShopping} onClick={openCart} />
              <div
                className={
                  openAccount
                    ? "rounded-full bg-primary h-7 w-12 flex items-center justify-center text-secondaryWhite"
                    : ""
                }
              >
                <FontAwesomeIcon icon={faUser} onClick={openAccountDropdown} />
              </div>
            </div>
            <button onClick={openMobile} className=" md:text-2xl lg:hidden">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {/* Account */}
          {openAccount ? (
            <div className="fixed right-[10.9rem] ">
              <div className="  bg-gradient-to-r from-slate-500 to-linear text-secondaryWhite w-72 p-8  h-72 rounded-md">
                <ul className="flex flex-col gap-y-6">
                  {accountitem.map((item, index) => (
                    <li
                      onClick={() => handleActive(index)}
                      key={index}
                      className={`flex items-center gap-x-6 ${
                        index === activeIndex ? `border-2 p-2 rounded-md` : ""
                      }`}
                    >
                      {item.icon ? (
                        <FontAwesomeIcon icon={item.icon} />
                      ) : (
                        <i className="bx bx-log-out text-xl"></i>
                      )}
                      <a href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
          {/* mobile items */}
          <ul
            className={
              open
                ? "fixed z-50 left-40 md:left-[35rem] transition duration-300  ease-in-out delay-500   border rounded-md bg-slate-500 text-secondaryWhite flex flex-col w-48  text-center gap-5 mt-5 lg:hidden"
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
        </div>
        <FirstSection />
        <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%] ">
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EightSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AccountDropDown;
