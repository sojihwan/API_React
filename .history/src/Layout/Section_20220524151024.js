import React, { useState } from "react";
import "../Layout/Section.css";

function Section() {
  let [소환, 소환변경] = useState("마법 카드");
  return (
    <div className="section">
      <div
        onClick={() => {
          소환변경("돼지환 발동");
        }}
      >
        {소환}
      </div>
    </div>
  );
}

export default Section;
