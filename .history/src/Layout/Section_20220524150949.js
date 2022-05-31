import React, { useState } from "react";
import "../Layout/Section.css";

function Section() {
  let [소환, 소환변경] = useState(false);
  return (
    <div className="section">
      <div
        onClick={() => {
          소환변경("손요한 발동");
        }}
      >
        마법 카드
      </div>
    </div>
  );
}

export default Section;
