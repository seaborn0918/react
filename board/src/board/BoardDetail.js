import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function BoardDetail(props) {
  const board = useParams();

  const [boardDetail, setBoardDetail] = useState([]);

  const navi = useNavigate();
  const goList = () => navi('/board/');

  useEffect(() => {
    axios.get("http://localhost:8080/board/" + board.boardIdx)
      .then(res => {
          setBoardDetail(res.data.board);
        }
      )
      .catch(err => alert(`통신 오류 + ${err}`));
  }, []);

  const handleDelete = (e) => {
    if (window.confirm('정말 삭제하겠습니까?') === true) {
      axios.delete("http://localhost:8080/board/delete/" + board.boardIdx)
        .then(res => {
          alert('삭제되었습니다.');
        })
        .catch(err => alert(`통신 오류 : ${err}`));
    } else {
      alert('삭제가 취소되었습니다.');
      e.preventDefault();
    }
  }

  return (
    <div className={'row my-5'}>
      <div className="col-sm-7 mx-auto">
        <form>
          <div className="text-center">
            <h1>{boardDetail.title}</h1>
          </div>
          <div className={'text-end text-muted d-flex flex-column mt-5'}>
            <span>글쓴이 {boardDetail.createId}</span>
            <span>작성일 {boardDetail.createDt}</span>
            {boardDetail.updateDt != null ? <span>수정일 {boardDetail.updateDt}</span> : null}
            <span>조회수 {boardDetail.hitCnt}</span>
          </div>
          <div className={'my-3 py-5 px-3 bg-light rounded-3'}>
            <p className={'m-0'}>{boardDetail.contents}</p>
          </div>
          <div className={'d-flex'}>
            <button type={'button'} className={'btn btn-primary me-auto'} onClick={goList}>목록</button>
            <Link to={`/board/edit/${boardDetail.boardIdx}`} className={'btn btn-dark me-2'}>수정</Link>
            <button className={'btn btn-secondary'} onClick={handleDelete}>삭제</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BoardDetail;