import React, {useState} from "react";

// 함수 컴포넌트 사용
function SetStateFunction() {
  // hooks 중 useState 사용함
  // 함수 컴포넌트에서는 state의 값을 변경하고자할 때는 userState 사용
    let [stateString, setStateString] = useState('click');

  function StateChange(e) {
    // 직접 수정이기 때문에 화면 update가 되지 않음
    console.log(`원본 : ${stateString}`)
    stateString = 'useState로 수정 클릭';
    console.log(`원본 : ${stateString}`)
    e.preventDefault();
  }
  return(


    <div>
      <button style={{marginRight: '20px'}} onClick={(e) => {
        StateChange(e)
      }}>state 직접 수정
      </button>
      <button onClick={() => {
        // useState를 사용하여 변수 수정
        setStateString('클릭')
      }}>setState로 변경
      </button>
      <br/>
      [state 변경하기] StateString: {stateString}
    </div>
  )
}
export default SetStateFunction;
