import React from "react";
import axios from "axios";
import "../Layout/Section.css";

function Section() {
  return (
    <div className="section">
      <img className="photo" name="photo" src="img/홍길동.jpg" alt=""></img>
      <em className="booktitle">나나</em>
    </div>
  );
}

export default Section;
