import React from "react";
import { classes } from "./sidebarMenuStyle";

function SidebarMenu() {
  return (
    <menu className ={classes.sidebarMenu}>
      <li className={classes.sidebarItem}>
        <a href="#" className={classes.sideBarLinc}>
          Company info
        </a>
      </li>
      <li className={classes.sidebarItem}>
        <a href="#" className={classes.sideBarLinc}>
          Account Management
        </a>
      </li>
      <li className={`${classes.sidebarItem} ${classes.subSidebarMenu}`}>
        <a href="#" className={classes.sideBarLinc}>
          Creative Setting
        </a>
      </li>
      <li className={`${classes.sidebarItem} ${classes.subSidebarMenu}`}>
        <a href="#" className={classes.sideBarLinc}>
          Invoices
        </a>
      </li>
      <li className={classes.sidebarItem}>
        <a href="#" className={classes.sideBarLinc}>
          Customer Managment
        </a>
      </li>
      <li className={`${classes.sidebarItem} ${classes.subSidebarMenu}`}>
        <a href="#" className={classes.sideBarLinc}>
          Payments
        </a>
      </li>
      <li className={classes.sidebarItem}>
        <a href="#" className={classes.sideBarLinc}>
          Notifications
        </a>
      </li>
      <li className={classes.sidebarItem}>
        <a href="#" className={classes.sideBarLinc}>
          Integrations
        </a>
      </li>
    </menu>
  );
}
export default SidebarMenu;
