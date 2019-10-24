import React from "react";
import { classes } from "./footerStyle";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLogo}>
        <img
          className={classes.footerLogoImg}
          src={require("../Header/klickly-logo-final.svg")}
          alt="logo"
        />
        <ul className={classes.cocialBox}>
          <li className={classes.cocialItem}>
            <i class="fab fa-twitter-square"></i>
          </li>
          <li className={classes.cocialItem}>
            <i class="fab fa-facebook-square"></i>
          </li>
          <li className={classes.cocialItem}>
            <i class="fab fa-linkedin"></i>
          </li>
        </ul>
      </div>
      <div className = {classes.footerLine}></div>
      <div className ={classes.footerSupport}>
          <p className={classes.copirite}>&#x24B8;Klikli</p>
          <ul className ={classes.support}>
              <li className={classes.suportLink}>Help Center</li>
              <li className={classes.suportLink}>Terms & Conditions</li>
              <li className={classes.suportLink}>Privacy Policy</li>
          </ul>
      </div>
    </footer>
  );
}
export default Footer;
