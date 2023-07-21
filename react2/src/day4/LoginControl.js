import React, {useState} from "react";

function LoginButton(props) {
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
  );
}

function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그아웃</button>
  );
}

function LoginControl(props) {
  // useState를 사용하여 state 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 클릭 이벤트용 함수
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // 엘리먼트 변수 선언. 실제로는 일반 변수.
  let button;

  // 조건부 렌더링 연산. state인 isLoggedIn의 값이 true 혹은 false 일 경우에 따라서 변수 button에 저장되는 컴포넌트가 변경됨
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick}/>
  } else {
    button = <LoginButton onClick={handleLoginClick}/>
  }

  return(
    <div>
      {button}
    </div>
  )
}

export default LoginControl;