import React from 'react';
import Dialog2 from "./Dialog2";

function WelcomeDialog2(props) {

  return (
    <div>
      <Dialog2 title={'어서오세요'} message={'우리 사이트에 오신 것을 환영합니다.'}/>
      <Dialog2 title={'경고!!!'} message={'오류가 발생했습니다.'}/>
    </div>
  )
}

export default WelcomeDialog2;