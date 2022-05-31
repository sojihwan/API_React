import React from "react";
import "./Modal.css";

function Modal(props) {
  function modal_close() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";

    let modal_overLay = document.getElementById("modal_overLay");
    modal_overLay.style.display = "none";
  }

  return (
    <div id="modal_overLay" onClick={modal_close}>
      <div id="modal">
        <div className="close" onClick={modal_close}>
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
                <img
                  className="modal_img"
                  src={
                    props.id.thumbnailUrl != null
                      ? props.id.thumbnailUrl.startsWith("http")
                        ? props.id.thumbnailUrl
                        : "img/book.png"
                      : "img/book.png"
                  }
                  alt=""
                />
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
                <h2>추천 도서 : </h2> &nbsp;
                <h3>
                  {props.id.similars === undefined
                    ? "관련 정보가 없습니다."
                    : props.id.similars === null
                    ? "관련 정보가 없습니다."
                    : props.id.similars === []
                    ? "관련 정보가 없습니다."
                    : props.id.similars.length === 0
                    ? "관련 정보가 없습니다."
                    : props.id.similars[0].titleStatement}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  대출 여부 : &nbsp;
                  {props.id.branchVolumes === undefined
                    ? "관련 정보가 없습니다."
                    : props.id.branchVolumes === null
                    ? "관련 정보가 없습니다."
                    : props.id.branchVolumes === []
                    ? "관련 정보가 없습니다."
                    : props.id.branchVolumes.length === 0
                    ? "관련 정보가 없습니다."
                    : props.id.branchVolumes[0].cState}
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Modal;
