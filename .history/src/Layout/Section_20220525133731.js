import React from "react";
import axios from "axios";
import "../Layout/Section.css";

function Section() {
  return (
    <div className="section">
      <div className="book">
        <img className="photo" name="photo" src="img/홍길동.jpg" alt=""></img>
        <h4 className="booktitle">파리의 도서관 : 자넷</h4>
      </div>
      <div className="book">
        <img className="photo" name="photo" src="img/홍길동.jpg" alt=""></img>
        <h4 className="booktitle">해리포터</h4>
      </div>
      <button className="previous">버튼</button>
      <button className="next">버튼2</button>
    </div>
  );
}

export default Section;
