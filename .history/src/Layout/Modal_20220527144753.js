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
        버튼s
      </button>
      {modal === true ? <Modal2 /> : null}
    </div>
  );
}

function Modal2() {
  return (
    <div className="modal">
      <table>
        <colgroup>
        <col>
        <col>
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={5}>
              <img src="img/홍길동.jpg" alt="" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <h1>제목</h1>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <h2>출판사</h2>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <h2>유사 책</h2>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <h2>대출여부</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Modal;
