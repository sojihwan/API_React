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
        <h2 id="title">
          <span>제목 - </span>
          {props.id.titleStatement}
        </h2>
      </div>

      <h2 id="author">
        <span>저자 - </span>
        {props.id.author}
      </h2>

      <h2 id="publication">
        <span>출판사 - </span>
        {props.id.publication}
      </h2>

      <h2 id="sametitle">
        <span>추천도서 - </span>
        {props.id.similars === undefined
          ? "추천도서가 없습니다"
          : props.id.similars.length === 0
          ? "추천도서가 없습니다"
          : props.id.similars[0].titleStatement}
      </h2>

      <h2 id="Cstate">
        <b>대출정보:</b>
        {props.id.branchVolumes === undefined
          ? "대출 정보가 없습니다"
          : props.id.branchVolumes.length === 0
          ? "대출 정보가 없습니다"
          : props.id.branchVolumes[0].cState}
      </h2>
    </div>
  );
}
export default Modal;
