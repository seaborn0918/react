import React from "react";
import SetStateClass from "./day3/SetStateClass";
import SetStateFunction from "./day3/SetStateFunction";
import NotificationList from "./day3/NotificationList";
import Counter from "./day3/Counter";
import CounterUseState from "./day3/CounterUseState";
import CounterUseEffect from "./day3/CounterUseEffect";
import VolumeControl from "./day3/VolumeControl";
import TextInputWithFocusButton from "./day3/TextInputWithFocusButton";

function App4() {
  return (
    <div>
      <SetStateClass/>
      <hr/>
      <SetStateFunction/>
      <hr/>
      <NotificationList/>
      <hr/>
      <Counter/>
      <hr/>
      <CounterUseState/>
      <hr/>
      <CounterUseEffect/>
      <hr/>
      <VolumeControl/>
      <hr/>
      <TextInputWithFocusButton/>
    </div>
  )
}

export default App4;