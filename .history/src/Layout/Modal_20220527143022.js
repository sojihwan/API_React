import { useState } from "react";
import "./Modal.css";

function Modal() {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        버튼
      </button>
      {modal === true ? <Modal2 /> : null}
    </div>
  );
}

function Modal2() {
  return (
    <div className="modal">
      <table>
        <tr>
          <td rowSpan={5}>
            <img src="img/홍길동.jpg" alt="" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <h3>제목</h3>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <h3>출판사</h3>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <p>대출여부</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <h4>유사 책</h4>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Modal;
