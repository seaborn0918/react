import React, {useState} from "react";

// 문제 1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대전화 정보를 입력 받고 확인 버튼 클릭시 console이나 alert로 결과를 출력하세요
function Join(props) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('여성');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handelSubmit = (e) => {
    alert(`
    id : ${userId}, 
    비밀번호 : ${userPw}, 
    이름 : ${userName}, 
    성별 : ${userGender}, 
    email : ${userEmail}, 
    휴대전화 : ${userPhone}
    `)
    e.preventDefault();
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor={'user-id'} className={'form-label'}>ID</label>
      <input type={'text'} id={'user-id'} className={'form-control mb-3'} value={userId}
             onChange={(e) => setUserId(e.target.value)}/>

      <label htmlFor={'user-pw'} className={'form-label'}>Password</label>
      <input type={'password'} id={'user-pw'} className={'form-control mb-3'} value={userPw}
             onChange={(e) => setUserPw(e.target.value)}/>

      <label htmlFor={'user-name'} className={'form-label'}>이름</label>
      <input type={'text'} id={'user-name'} className={'form-control mb-3'} value={userName}
             onChange={(e) => setUserName(e.target.value)}/>

      <div>
        <p className={"mb-1"}>성별</p>
        <div className={'form-check form-check-inline me-2 mb-3'}>
          <input type={'radio'} className={'form-check-input'} name={'user-gender'} id={'user-gender1'} value={'여성'}
                 onChange={(e) => setUserGender(e.target.value)}/>
          <label htmlFor={'user-gender1'} className={'form-check-label'}>여성</label>
        </div>
        <div className={'form-check form-check-inline'}>
          <input type={'radio'} className={'form-check-input'} name={'user-gender'} id={'user-gender2'} value={'남성'}
                 onChange={(e) => setUserGender(e.target.value)}/>
          <label htmlFor={'user-gender2'} className={'form-check-label'}>남성</label>
        </div>
      </div>

      <label htmlFor={'user-email'} className={'form-label'}>이메일</label>
      <input type={'email'} id={'user-email'} className={'form-control mb-3'} value={userEmail}
             onChange={(e) => setUserEmail(e.target.value)}/>

      <label htmlFor={'user-phone'} className={'form-label'}>휴대전화</label>
      <input type={'tel'} id={'user-phone'} className={'form-control mb-3'} value={userPhone}
             onChange={(e) => setUserPhone(e.target.value)}/>

      <button type={'submit'} className={'btn btn-dark'}>회원가입</button>
      <button type={'reset'} className={'btn btn-secondary ms-2'}>취소</button>
    </form>
  )
}

export default Join;