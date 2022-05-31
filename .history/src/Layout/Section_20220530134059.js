import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Section.css";

function Section() {
  const [api, setApi] = useState(null);
  const [id, setid] = useState({ 1: "ssss" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchapi = async () => {
      try {
        setApi(null);
        setError(null);
        setLoading(true);
        const response = await axios.get(
          "https://library.me.go.kr/pyxis-api/2/collections/2/search?all=k%7Ca%7Clibrary"
        );
        setApi(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchapi();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!api) return null;

  return (
    <div id="section">
      {api.data.list.map((item, index) => {
        return (
          <div
            className="book"
            key={index}
            onClick={() => {
              setModal(!modal);
            }}
          >
            {" "}
            <img
              className="image"
              src={
                api.data.list[index].thumbnailUrl !== null
                  ? api.data.list[index].thumbnailUrl
                  : "img/book.png"
              }
              alt=""
            />
            <div className="booktitle">
              <b>{api.data.list[index].titleStatement}</b>
            </div>
            {modal === true ? <Modal /> : null}
          </div>
        );
      })}
      <button
        className="prev"
        style={modal === true ? { display: "none" } : null}
      >
        이전
      </button>
      <button
        className="next"
        style={modal === true ? { display: "none" } : null}
      >
        다음
      </button>
    </div>
  );
}

function Modal(props) {
  console.log(props);
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
              <h2>제목</h2>
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

export default Section;
