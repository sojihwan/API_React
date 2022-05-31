import React from "react";
import body from "./body";
import Header from "./header";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <body />
    </div>
  );
}

export default Layout;
