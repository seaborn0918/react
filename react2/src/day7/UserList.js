import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserList(props) {
  const [userList, setUserList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/user/userList")
      .then(res => {
        setUserList(res.data.userList);
        console.log(res);
      })
      .catch(err => {
        alert(`통신 오류 : ${err}`);
      });
  }, [])

  return (
    <div>
      <h1>회원 목록</h1>
      <table className={'table table-hover table-striped'}>
        <thead>
        <tr>
          <th>사용자 아이디</th>
          <th>사용자 비밀번호</th>
          <th>사용자 닉네임</th>
          <th>사용자 이메일</th>
        </tr>
        </thead>
        <tbody>
        {
          userList.map(item => {
            return (
              <tr key={item.userId}>
                <td>{item.userId}</td>
                <td>{item.userPw}</td>
                <td>{item.userName}</td>
                <td>{item.userEmail}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default UserList;