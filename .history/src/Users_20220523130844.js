import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        setError(null);
        setLoading(true);
        const response = await axios.get(
          "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=%EC%A2%85%EB%A1%9C%EA%B5%AC&dataTerm=month&pageNo=1&numOfRows=100&returnType=json&serviceKey=6mAM91%2BDR6DewykfxnvrWuMgzIPlkFZBIyuQMgtaVO2IlDOOw%2BVyKX5rmCy16nAx%2F%2FKXdbQy7sJ%2BUPoAkmonYw%3D%3D"
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
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <ul>
      {users.map((response) => (
        <li key={response.khaiValue}>
          {response.so2Value} ({response.coValue})
        </li>
      ))}
    </ul>
  );
}

export default Users;
