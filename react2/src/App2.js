import React from "react";
import WelcomeFunc from "./day2/WelcomeFunc";
import WelcomeClass from "./day2/WelcomeClass";
import Comment from "./day2/Comment";


// 자바스크립트 object 타입 변수
const author = {
  avatarUri: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/451/3372cafa51c493af747dc3b35a26d5a0_res.jpeg',
  name: '동글'
}


function App2() {
  return (
    <div>
      {/* 컴포넌트 합성 */}
      <h1>함수 컴포넌트 사용</h1>
      <WelcomeFunc name={'리액트'}/>
      <hr/>
      <h1>클래스 컴포넌트 사용</h1>
      <WelcomeClass name={'리액트'}/>
      <hr/>

      {/* 자식 컴포넌트 Comment 호출 */}
      {/* 속성 author, text, date를 전달 */}
      <Comment author={author} text={'동글이 이미지'} date={new Date()}/>
    </div>
  )
}

export default App2;