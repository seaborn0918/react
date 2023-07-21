import React from 'react';
import WelcomeDialog from "./day6/WelcomeDialog";
import SplitPane from "./day6/SplitPane";
import Contacts from "./day6/Contacts";
import Chat from "./day6/Chat";
import Dialog2 from "./day6/Dialog2";
import WelcomeDialog2 from "./day6/WelcomeDialog2";
import SignUpDialog from "./day6/SignUpDialog";
import ProfileCard from "./day6/ProfileCard";
import Toolbar from "./day6/Toolbar";

function App7(props) {
  return (
    <div className={'container my-5'}>
      <WelcomeDialog/>
      <hr/>
      {/* 부모 컴포넌트인 App07에서 자식 컴포넌트인 SplitPane을 호출 */}
      {/* 자식 컴포넌트 호출 시 속성 left, right에 다른 자식 컴포넌트를 전달*/}
      <SplitPane left={<Contacts/>} right={<Chat/>}/>
      <hr/>
      <WelcomeDialog2/>
      <hr/>
      <SignUpDialog/>
      <hr/>
      <ProfileCard/>
      <hr/>
      {/* 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하면서 호출 */}
      <Toolbar theme={'secondary'}/>
    </div>
  )
}

export default App7;