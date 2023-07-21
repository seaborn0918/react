import React from "react";
import Side from "./Side";
import Contents from "./Contents";
import MainContents from "./MainContents";

const styles = {
  fakeImg: {
    height: 200,
    background: '#aaa'
  }
}

function Main(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <Side styles={styles.fakeImg}/>
        <MainContents styles={styles.fakeImg}/>
      </div>
    </div>
  )
}

export default Main;