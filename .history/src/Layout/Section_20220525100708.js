import React from "react";
import axios from "axios";
import "../Layout/Section.css";

function Section() {
  return (
    <div className="section">
      <label className="booktitle">
        <img className="photo" src="img/홍길동.jpg" alt=""></img> <br />
        나나
      </label>
    </div>
  );
}

export default Section;
