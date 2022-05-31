import React from "react";
import "./Layout.css";
import Section from "./Section";
import "./main.css";

function Layout() {
  return (
    <div>
      <main>
        <aside></aside>
        <Section />
        <aside></aside>
      </main>
    </div>
  );
}

export default Layout;
