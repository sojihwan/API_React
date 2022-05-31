import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Section.css";
import Modal from "../Modal/Modal";

function Section() {
  const [api, setApi] = useState(null);
  const [id, setId] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page , setPage] = useState(1)
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
    console.log(id);
  }

  function modal() {
    let modal = document.getElementById("modal");
    let modal_overLay = document.getElementById("modal_overLay");
    modal.style.display = "flex";
    modal_overLay.style.display = "flex"
  }
  const onBef = async () => {
    const modal = document.getElementById("modal");
    if(modal.style.display === "flex"){
      alert("모달장을 닫아주세요");
      return 0
    }
    if(page <= 1 ){
      setPage(1)
      console.log(page)
      const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
    );

    setApi(reponse.data)
      alert("첫패이지 입니다");
      return 0;
    }
    setPage(page-1)
    console.log(page)
    const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
    );
    setApi(reponse.data)
  }

  const onNaxt = async () => {
    const modal = document.getElementById("modal");
    if(modal.style.display === "flex"){
      alert("모달장을 닫아주세요");
      return 0
    }
    if(page===9){
      alert("마지막 페이지 입니다.")
      return 0
    }
    console.log(page)
    setPage(page+1)
    const reponse = await axios.get(
      `http://library.me.go.kr/pyxis-api/1/collections/${page}/search?all=k|a|library`
      );
    setApi(reponse.data);
  }

  return (
    <div id="section">
      {api.data.list.map((item, index) => {
        return (
          <div className="book" key={index} onClick={modal}>
            <img
              className="image"
              src={
                
                api.data.list[index].thumbnailUrl != null? 
                api.data.list[index].thumbnailUrl.startsWith('http')?api.data.list[index].thumbnailUrl:"img/book.png":
                "img/book.png"
              }
              onClick={() => {
                idgive(api.data.list[index]);
              }}
              alt=""
            />
            <div className="booktitle">
              <b>{api.data.list[index].titleStatement}</b>
            </div>
          </div>
        );
      })}
      <button id="prev" onClick={onBef}>이전</button>
      <button id="next" onClick={onNaxt}>다음</button>
      <Modal id={id} />
    </div>
  );
}

export default Section;
