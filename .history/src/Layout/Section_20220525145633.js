import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Layout/Section.css";

function Section() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          "https://library.me.go.kr/pyxis-api/2/collections/2/search?all=k%7Ca%7Clibrary"
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;
  return (
    <div className="section">
      <div className="book">
        <img
          className="photo"
          name="photo"
          src={users.data.list[0].thumbnailUrl}
          alt=""
        ></img>
        <h4 className="booktitle">파리의 도서관 : 자넷</h4>
      </div>
      <div className="book">
        <img className="photo" name="photo" src="img/홍길동.jpg" alt=""></img>
        <h4 className="booktitle">해리포터</h4>
      </div>
      <button className="prev">&lang;</button>
      <button className="next">&rang;</button>
    </div>
  );
}

export default Section;
