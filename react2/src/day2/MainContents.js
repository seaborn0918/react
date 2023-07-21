import React from "react";
import Contents from "./Contents";

function MainContents(props) {

  const styles = props.styles;

  return (
    <div className="col-sm-8">
      <Contents styles={styles}/>
      <Contents styles={styles}/>
    </div>
  )
}

export default MainContents;