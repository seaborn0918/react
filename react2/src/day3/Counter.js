import React from "react";

function Counter(props) {
  // 지역변수 count 선언, 초기값 0
  let count = 0;

  return (
    <div className={'container'}>
      <p>총 {count}번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        count++;
        console.log(`${count} 클릭 횟수`);
      }}>클릭
      </button>
    </div>
  )
}

export default Counter;