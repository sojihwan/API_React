import React from "react";
import Section from "./Section";
import "./Main.css";

function Main() {
  return (
    <div id="main">
      <aside></aside>
      <Section />
      <aside></aside>
      <button>이전</button>
    </div>
  );
}

export default Main;
