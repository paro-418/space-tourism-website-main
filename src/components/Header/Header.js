import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../starter-code/assets/shared/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} />
      <nav className={classes.btnDiv}>
        <ul className={classes.btnUl}>
          <li>
            <NavLink
              to="/space-tourism-website-main/home"
              className={classes.btn}
            >
              00 home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism-website-main/destination"
              className={classes.btn}
            >
              01 destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism-website-main/crew"
              className={classes.btn}
              activeClassName={classes.btn}
            >
              02 crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism-website-main/technology"
              className={classes.btn}
            >
              03 technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
