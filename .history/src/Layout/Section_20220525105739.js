import React from "react";
import axios from "axios";
import "../Layout/Section.css";

function Section() {
  return (
    <div className="section">
      <div className="label">
        <img className="photo" name="photo" src="img/홍길동.jpg" alt=""></img>
        <h4 className="booktitle">나나</h4>
      </div>
    </div>
  );
}

export default Section;
