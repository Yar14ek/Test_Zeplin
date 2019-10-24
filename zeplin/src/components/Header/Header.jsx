import React from "react";
import { classes } from "./headerStyle";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.boxGradient}></div>
      <div className={classes.headerContent}>
        <a href="#" className={classes.headerLogo}>
          <img src={require("./klickly-logo-final.svg")} alt="logo" />
          <h1 className={classes.logoTitle}>Brands</h1>
        </a>
        <menu className={classes.headerMenu}>
          <li className={classes.headerMenuItem}>
            <a href="#" className={classes.headerMenuLinck}>
              Home
            </a>
          </li>
          <li className={classes.headerMenuItem}>
            <a href="#" className={classes.headerMenuLinck}>
              Products
            </a>
          </li>
          <li className={classes.headerMenuItem}>
            <a href="#" className={classes.headerMenuLinck}>
              Campaigns
            </a>
          </li>
          <li className={classes.headerMenuItem}>
            <a href="#" className={classes.headerMenuLinck}>
              Orders
            </a>
          </li>
          <li className={classes.headerMenuItem}>
            <a href="#" className={classes.headerMenuLinck}>
              Performance
            </a>
          </li>
        </menu>
        <div className={classes.headerLine}></div>
        <div className={classes.headerBellBlock}>
          <i className={`fas fa-bell ${classes.bell}`}></i>
          <h2 className={classes.bellTitle}>Company</h2>
        </div>
        <div className={classes.bellAmazon}>
          <i className={`fab fa-amazon ${classes.amazonLogo}`}></i>
        </div>
      </div>
    </header>
  );
}
export default Header;
