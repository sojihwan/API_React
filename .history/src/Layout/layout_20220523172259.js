import React from "react";
import Body from "./body";
import Header from "./header";
import "./layout.css";

function Layout() {
  return (
    <div className="layout" style={{ background: "#EDE6DB" }}>
      <Header />
      <Body />
    </div>
  );
}

export default Layout;
