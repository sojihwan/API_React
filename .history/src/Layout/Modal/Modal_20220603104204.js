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
    <div id="modal">
      <div className="close" onClick={modal_close}>
        X
      </div>
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
      <div id="hodden">
        <h3 id="title">
          <span>제목 - </span>
          {props.id.titleStatement}
        </h3>
      </div>

      <h3 id="author">
        <span>저자 - </span>
        {props.id.author}
      </h3>

      <h3 id="publication">
        <span>출판사 - </span>
        {props.id.publication}
      </h3>

      <h3 id="sametitle">
        <span>추천도서 - </span>
        {props.id.similars === undefined
          ? "추천도서가 없습니다"
          : props.id.similars.length === 0
          ? "추천도서가 없습니다"
          : props.id.similars[0].titleStatement}
      </h3>

      <h3 id="Cstate">
        <span>대출 정보 - </span>
        {props.id.branchVolumes === undefined
          ? "대출 정보가 없습니다"
          : props.id.branchVolumes.length === 0
          ? "대출 정보가 없습니다"
          : props.id.branchVolumes[0].cState}
      </h3>
    </div>
  );
}
export default Modal;
