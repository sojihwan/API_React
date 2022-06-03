import React from "react";
import "./Modal.css";

function Modal(props) {
  function modal_overLay() {
    let modal_overLay = document.getElementById("modal_overLay");
    modal_overLay.style.display = "none";
  }

  function modal_close() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  return (
    <div id="modal_overLay" onClick={modal_overLay}>
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
                  <span>도서 제목 - </span> &nbsp;
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

@media ( min-width: 771px ) {
  #modal_overLay{
    background: rgba(1, 1, 1, 0.525);
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    font-family: 'Noto Sans KR', sans-serif;
    box-shadow: 0 8px 32px 0 rgba(135, 83, 31, 0.302);
    backdrop-filter: blur(1.7px);
    -webkit-backdrop-filter: blur(1.7px);
  }

  #modal * {
    box-sizing: border-box;
  }

  #modal {
    background: white;
    display: none;
    position: fixed;
    border: 3px solid black;
    border-radius: 5px;
    width: 50%;
    height: 460px;
    top: 20%;
    left: 25%;
    color: black;
  }

  .close {
    position: fixed;
    right: 25%;
    margin-right: 15px;
    font-size: 24px;
  }

  .modal_img {
    width: 250px;
    margin: 0px 50px;
  }

  td {
    text-align: left;
  } 

  span {
    font-size: 25px;
  }
}
