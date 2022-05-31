import React from "react";
import "./Modal.css";

function Modal(props) {
  function modal_close() {
    let modal = document.getElementById("modal");
    let modal_overLay = document.getElementById("modal_overLay");

    modal.style.display = "none";
    modal_overLay.style.display = "none";
  }

  return (
    <div id="modal_overLay" onClick={modal_close}>
      <div id="modal">
        <div className="close" onClick={modal_close}>
          X
        </div>
        <table>
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
                <h3>
                  <span>책 제목 - </span> &nbsp;
                  {props.id.titleStatement}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <span>저자 - </span> &nbsp;
                  {props.id.author}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <span>출판사 - </span>
                  {props.id.publication}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <span>추천 도서 - </span> &nbsp;
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
                  <span>대출 여부 - </span> &nbsp;
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
