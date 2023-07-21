import React from "react";

function Children31(props) {
  // 부모 컴포넌트에서 전달받은 데이터
  const recData = props.data;
  // 부모 컴포넌트에서 전달받은 함수
  let recFunc = props.func;

  return (
    <div className={'border border-2 rounded-3 p-3'}>
      <h3>자식 컴포넌트</h3>
      <h4>부모컴포넌트에서 전달된 데이터 : {recData}</h4>
      <button type={'button'} className={'btn btn-primary'} onClick={recFunc}>클릭</button>
    </div>
  )
}

export default Children31;