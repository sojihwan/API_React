import "./Modal.css";

function Modal() {
  return (
    <div>
      <div className="modal">
        <table>
          <tr>
            <td rowSpan={2}>
              <img src="img/홍길동.jpg" alt="" />
            </td>
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
        </table>

        <h3>출판사</h3>
        <p>대출여부</p>
        <h4>유사 책</h4>
      </div>
    </div>
  );
}

export default Modal;
