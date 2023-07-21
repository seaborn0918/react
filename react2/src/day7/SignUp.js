import React, {useState} from 'react';
import axios from "axios";

function SignUp(props) {
  const [userId, setUserID] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = () => {
    // axios.post("http://localhost:8080/user/join", null, {
    //   params: {
    //     userId: userId,
    //     userPw: userPw,
    //     userName: userName,
    //     userEmail: userEmail,
    //   }
    // })
    //   .then(res => {
    //     alert('회원가입 완료');
    //   })
    //   .catch(err => {
    //     alert(`통신 오류 : ${err}`);
    //   });


    // data dto로 넘기기
    axios.post("http://localhost:8080/user/join", {
      userId: userId,
      userPw: userPw,
      userName: userName,
      userEmail: userEmail
    })
      .then(res => {
        alert('회원가입 완료');
      })
      .catch(err => {
        alert(`통신 오류 : ${err}`);
      });
  }

  return (
    <div className={'mt-5'}>
      <h1>회원 가입</h1>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto'}>
          <form onSubmit={handleSubmit}>
            <div className={'my-3'}>
              <label htmlFor="user-id" className={'form-label'}>아이디</label>
              <input type="text" id={'user-id'} className={'form-control'} value={userId} onChange={e => {
                setUserID(e.target.value)
              }}/>
            </div>
            <div className={'my-3'}>
              <label htmlFor="user-pw" className={'form-label'}>비밀번호</label>
              <input type="password" id={'user-pw'} className={'form-control'} onChange={e => {
                setUserPw(e.target.value)
              }}/>
            </div>

            <div className={'my-3'}>
              <label htmlFor="user-name" className={'form-label'}>닉네임</label>
              <input type="text" id={'user-name'} className={'form-control'} onChange={e => {
                setUserName(e.target.value)
              }}/>
            </div>

            <div className={'my-3'}>
              <label htmlFor="user-email" className={'form-label'}>이메일</label>
              <input type="email" id={'user-email'} className={'form-control'} onChange={e => {
                setUserEmail(e.target.value)
              }}/>
            </div>

            <div className={'d-grid gap-2'}>
              <button type={'submit'} className={'btn btn-dark'}>회원가입</button>
              <button type={'reset'} className={'btn btn-secondary'}>취소</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;