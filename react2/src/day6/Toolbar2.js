import React from 'react';
import ThemedButton2 from "./ThemedButton2";

// 부모 컴포넌트에서 호출 시 전달한 데이터가 없기 때문에 props가 비어있음
function Toolbar2(props) {
  return (
    // 자식 컴포넌트를 호출하는데 전달하는 데이터가 존재하지 않음
    <ThemedButton2/>
  );
}

export default Toolbar2;