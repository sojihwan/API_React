import React from "react";
import "./Modal.css";

function Modal(props) {
  function modal_close() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";

    let modal_overLay = document.getElementById("modal_overLay");
    modal_overLay.style.display = "none";
  }

  console.log(props.id);

  return (
    <div id="modal_overLay" onClick={modal_close}>
      <div id="modal">
        <div className="close" onClick={modal_close}>
          X
        </div>
        <table>
          <colgroup>
            <col width="35%" />
            <col width="65%" />
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
                <h2>
                  추천 도서 : &nbsp;
                  {props.id.similars == false
                    ? "관련 정보가 없습니다."
                    : props.id.similars[0].titleStatement}
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2>
                  {props.id.branchVolumes == false
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes[0].cState}
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Modal;
