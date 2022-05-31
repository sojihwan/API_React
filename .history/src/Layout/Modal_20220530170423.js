import React, { useState } from "react";
import "./Modal.css";

function Modal(props) {
  let [close, setClose] = useState(true);
  let modal = document.getElementById("modal");

  console.log(props.id);
  return (
    <div id="modal">
      <div className="modal_close" onClick={() => setClose(false)}>
        {close === false ? (modal.style.display = "none") : ""}X
      </div>
      <table>
        <colgroup>
          <col width="40%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={6}>
              <img className="modal_img" src="img/book.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <h2>{props.id.titleStatement}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>{props.id.author}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>{props.id.publication}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>
                {props.id.similars === undefined
                  ? "추천도서가 없습니다"
                  : props.id.similars === null
                  ? "추천도서가 없습니다"
                  : props.id.similars === []
                  ? "추천도서가 없습니다"
                  : props.id.similars.length === 0
                  ? "추천도서가 없습니다"
                  : props.id.similars[0].titleStatement}
              </h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>
                {props.id.branchVolumes === undefined
                  ? "대출 정보가 없습니다"
                  : props.id.branchVolumes === null
                  ? "대출 정보가 없습니다"
                  : props.id.branchVolumes === []
                  ? "대출 정보가 없습니다"
                  : props.id.branchVolumes.length === 0
                  ? "대출 정보가 없습니다"
                  : props.id.branchVolumes[0].cState}
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Modal;
