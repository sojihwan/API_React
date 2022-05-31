import React from "react";
import "./Section.css";
function Modal(props) {
  return (
    <div className="modal">
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
              <h2>props.api.data.list[props].titleStatement</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>저자</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>출판사</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>유사 책</h2>
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
