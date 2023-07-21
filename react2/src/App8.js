import React from 'react';
import Toolbar2 from "./day6/Toolbar2";
import ThemeContext from "./day6/ThemeContext";

function App8(props) {
  return (
    // context의 Provider에 데이터를 전달함
    <ThemeContext.Provider value={'dark'}>
      {/* 실제로 직계 자손 컴포넌트는 해당 데이터를 사용하지 않음 */}
      {/* 여러 단계 아래의 자손 컴포넌트에서 해당 데이터를 사용함 */}
      <Toolbar2/>
    </ThemeContext.Provider>
  )
}

export default App8;