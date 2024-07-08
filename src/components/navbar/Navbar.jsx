import { NavLink } from "react-router-dom";
import { navlinks } from "./navlinks";

export const Navbar = () => {
  return (
    <div>
      <h1>Exclusive</h1>
      <ul>
        {navlinks.map((links, index) => (
          <li key={index}>
            <NavLink to={links.href}>{links.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
