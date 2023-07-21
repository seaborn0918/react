import React from "react";

function Children2(props) {
  const sendData = () => {
    // 부모 컴포넌트에서 전달받은 props의 객체가 부모 컴포넌트의 state를 수정할 수 있는 setState 함수
    // 부모 컴포넌트에서 전달받은 함수에 매개변수로 데이터를 전달하면 부모 컴포넌트에 데이터가 전달됨
    props.setData('자식 컴포넌트의 데이터');
  };


  return(
    <div>
      {/* 클릭 이벤트에 버튼 클릭시 sendData라는 함수를 실행*/}
      <button type={'button'} className={'btn btn-primary'} onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
    </div>
  )
}

export default Children2;