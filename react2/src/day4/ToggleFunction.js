import React, {useState} from "react";

function ToggleFunction(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 첫번째 방법
  // function handleClick() {
  //   setIsToggleOn((isToggleOn) => !isToggleOn);
  // }

  // 두번째 방법
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button type={'button'} className={'btn btn-primary'} onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  )
}

export default ToggleFunction;