import React from "react";
import "./Layout.css";
import Section from "./Section";

function Layout() {
  return (
    <div className="layout">
      <header>도서관</header>
      <main>
        <aside></aside>
        <Section />
        <aside></aside>
      </main>
    </div>
  );
}

export default Layout;
