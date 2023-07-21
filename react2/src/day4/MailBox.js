import React from "react";

function MailBox(props) {
  const unreadMessage = props.unreadMessage;

  return (
    <div>
      <h1>안녕하세요</h1>
      {unreadMessage > 0 &&
        <h2>현재 {unreadMessage}개의 읽지 않은 메일이 있습니다.</h2>
      }
    </div>
  )
}

export default MailBox;

