import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function BoardList(props) {
  const [boardList, setBoardList] = useState([]);
  const navi = useNavigate();
  const goWrite = () => navi('/board/write');


  useEffect(() => {
    axios.get("http://localhost:8080/board/")
      .then(res => {
          setBoardList(res.data.boardList);
        }
      )
      .catch(err => {
        alert(`통신 오류 : ${err}`);
      });
  }, []);

  return (
    <div>
      <div className={'text-center my-5'}>
        <h1>게시판</h1>
      </div>
      <div>
        <table className={'table table-hover table-stripped text-center'}>
          <colgroup>
            <col style={{width: '7%'}}/>
            <col style={{width: '50%'}}/>
            <col style={{width: '7%'}}/>
            <col style={{width: '28%'}}/>
            <col style={{width: '8%'}}/>
          </colgroup>
          <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>게시일</th>
            <th>조회수</th>
          </tr>
          </thead>
          <tbody>
          {
            boardList.map(item => {
              return (
                <tr key={item.boardIdx}>
                  <td>{item.boardIdx}</td>
                  <td className={'text-start'}>
                    <Link to={'/board/' + item.boardIdx} className={'text-decoration-none'}>{item.title}</Link>
                  </td>
                  <td>{item.createId}</td>
                  <td>{item.createDt}</td>
                  <td>{item.hitCnt}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      <div className={'text-end'}>
        <button type={'button'} className={'btn btn-primary'} onClick={goWrite}>글쓰기</button>
      </div>
    </div>
  )
}

export default BoardList;