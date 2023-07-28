import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function BoardWrite(props) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [createId, setCreateId] = useState('');

  const navi = useNavigate();
  const goList = () => navi('/board/');

  const handleSubmit = () => {
    axios.post("http://localhost:8080/board/write", null,
      {
        params: {
          title: title,
          contents: contents,
          createId: createId
        }
      })
      .then(res => {
        navi('/board/');
        // alert('글 등록했습니다.');
      })
      .catch(err => alert(`통신 오류 : ${err}`));
  };


  return (
    <div className={'row my-5'}>
      <div className={'col-sm-8 mx-auto'}>
        <h1 className={'text-center'}>글쓰기 페이지</h1>
        <form className={'my-5'} onSubmit={handleSubmit}>
          <div className={'my-3'}>
            <input type="text" className={'form-control'} placeholder={'제목을 입력해주세요'} value={title}
                   onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className={'my-3'}>
            <input type="text" className={'form-control'} placeholder={'글쓴이를 입력해주세요'} value={createId}
                   onChange={e => setCreateId(e.target.value)}/>
          </div>
          <div className={'my-3'}>
            <textarea className="form-control" rows={10} placeholder={'내용을 입력해주세요'} value={contents}
                      onChange={e => setContents(e.target.value)}></textarea>
          </div>
          <div className={'my-3 d-flex'}>
            <button type={'button'} className={'btn btn-light me-auto'} onClick={goList}>목록</button>
            <button type={'submit'} className={'btn btn-primary me-2'}>등록</button>
            <button type={'reset'} className={'btn btn-dark'}>취소</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BoardWrite;