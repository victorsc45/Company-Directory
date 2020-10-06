import React from "react";
// standard row component react
function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;
