import "./Modal.css";

function Modal() {
  return (
    <div className="modal">
      <img src="img/홍길동.jpg" alt=""></img>
      <h2>제목</h2>
      <h3>저자</h3>
      <h4>출판사</h4>
      <p>출판년도</p>
      <p>대출여부</p>
      <em>유사 책</em>
    </div>
  );
}

export default Modal;
