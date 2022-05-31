import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Section.css";
import Modal from "./Modal.js";

function Section() {
  const [api, setApi] = useState(null);
  const [id, setId] = useState({ 1: "ssss" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  function idgive(key) {
    setId(key);
  }
  function model() {
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
  return (
    <div id="section">
      {api.data.list.map((item, index) => {
        return (
          <div className="book" key={index} onClick={model}>
            <img
              className="image"
              src={
                api.data.list[index].thumbnailUrl !== null
                  ? api.data.list[index].thumbnailUrl
                  : "img/book.png"
              }
              onClick={idgive}
              alt=""
            />
            <div className="booktitle">
              <b>{api.data.list[index].titleStatement}</b>
            </div>
          </div>
        );
      })}
      <Modal key={id} />
      <button className="prev">이전</button>
      <button className="next">다음</button>
    </div>
  );
}

export default Section;
