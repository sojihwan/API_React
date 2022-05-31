import React from "react";
import Body from "./body";
import Header from "./header";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Body />
    </div>
  );
}

export default Layout;
