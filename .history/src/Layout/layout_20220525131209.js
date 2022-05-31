import React from "react";
import "./Layout.css";
import Section from "./Section";

function Layout() {
  return (
    <div className="layout">
      <header>환경 디지털 도서 목록</header>
      <main>
        <aside></aside>
        <Section />
        <aside></aside>
        <button>ㅎㅇ</button>
      </main>
    </div>
  );
}

export default Layout;
