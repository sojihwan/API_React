import "./Modal.css";

function Modal() {
  return (
    <div>
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
    </div>
  );
}

export default Modal;
