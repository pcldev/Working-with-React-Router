import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.logo}>Quotes</h1>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/" activeClassName={classes.active} exact>
                All Quotes
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-quote" activeClassName={classes.active}>
                Add Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
