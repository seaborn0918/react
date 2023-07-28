import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function BoardEdit(props) {
  const board = useParams();

  const [boardDetail, setBoardDetail] = useState([]);
  const [title, setTitle] = useState('');
  const [createId, setCreateId] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [contents, setContents] = useState('');

  const navi = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/board/" + board.boardIdx)
      .then(res => {
          setBoardDetail(res.data.board);
        }
      )
      .catch(err => alert(`통신 오류 + ${err}`));
  }, []);

  const handleEditSubmit = () => {
    axios.put(`http://localhost:8080/board/edit/${board.boardIdx}`, null, {
      params: {
        title: title,
        createId: createId,
        updateId: updateId,
        contents: contents
      }
    })
      .then(res => {
        alert(`수정이 완료됐습니다.`);
        navi('/board/');
      })
  }


  return (
    <div className="row my-5">
      <div className="col-sm-8 mx-auto">
        <h1 className={'text-center'}>수정 페이지</h1>
        <form className={'my-5'} onSubmit={handleEditSubmit}>
          <div className="input-group my-3">
            <span className="input-group-text">제목</span>
            <input type="text" className="form-control" defaultValue={boardDetail.title}
                   onChange={e => setTitle(e.target.value)}
                   placeholder="제목을 입력하세요"/>
          </div>

          {boardDetail.updateId != null ?
            <div className="input-group my-3">
              <span className="input-group-text">글번호</span>
              <input type="text" className="form-control" defaultValue={boardDetail.boardIdx} readOnly={true}/>
              <span className="input-group-text">수정자</span>
              <input type="text" className="form-control" defaultValue={boardDetail.updateId}
                     onChange={e => setUpdateId(e.target.value)}/>
            </div>
            :
            <div className="input-group my-3">
              <span className="input-group-text">글번호</span>
              <input type="text" className="form-control" defaultValue={boardDetail.boardIdx} readOnly={true}/>
              <span className="input-group-text">글쓴이</span>
              <input type="text" className="form-control" defaultValue={boardDetail.createId}
                     onChange={e => setUpdateId(e.target.value)}/>
            </div>
          }

          {boardDetail.updateDt != null ?
            <div>
              <div className={'input-group my-3'}>
                <span className="input-group-text">작성일</span>
                <input type="text" className="form-control" defaultValue={boardDetail.createDt} readOnly={true}/>
              </div>
              <div className={'input-group my-3'}>
                <span className="input-group-text">수정일</span>
                <input type="text" className="form-control" defaultValue={boardDetail.updateDt} readOnly={true}/>
              </div>
            </div> :
            <div className={'input-group my-3'}>
              <span className="input-group-text">작성일</span>
              <input type="text" className="form-control" defaultValue={boardDetail.createDt} readOnly={true}/>
            </div>
          }

          <div className="my-3">
            <textarea className="form-control" defaultValue={boardDetail.contents} onChange={e => setContents(e.target.value)}
                      rows="10"
                      placeholder="내용을 입력하세요"></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary me-2">확인</button>
            <button type="reset" className="btn btn-secondary">취소</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BoardEdit;