import React from "react";
import "./Section.css";

function Modal(props) {
  function model_Close() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  console.log(props.id);
  return (
    <div id="modal">
      <div className="close" onClick={model_Close}>
        X
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
              <h2>대출 여부</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Modal;
