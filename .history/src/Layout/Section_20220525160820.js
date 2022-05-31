import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Layout/Section.css";

function Section() {
  const [api, setApi] = useState(null);
  const [id, setid] = useState({});
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

  // return (
  //   <div id="section">
  //     <div className="book">
  //       <img className="photo" src={api.data.list[0].thumbnailUrl} alt="" />
  //       <h4 className="booktitle">{api.data.list[0].titleStatement}</h4>
  //     </div>
  //     <div className="book">
  //       <img className="photo" src="img/홍길동.jpg" alt="" />
  //       <h4 className="booktitle">해리포터</h4>
  //     </div>
  //     <button className="prev">&lang;</button>
  //     <button className="next">&rang;</button>
  //   </div>
  // );
}

export default Section;
