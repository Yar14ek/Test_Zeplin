import React from "react";
import SidebarAddLogo from "./SidebarAddLogo/Sidebar";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import Content from "./Contant/Contant";
function Main() {
  const asideBar = {
    width: "33%"
  };
  const main = {
    display: "flex",
    marginTop: "65px",
    
  };
  return (
    <main style={main}>
      <aside style={asideBar}>
        <SidebarAddLogo />
        <SidebarMenu />
      </aside>
      <Content />
    </main>
  );
}

export default Main;
