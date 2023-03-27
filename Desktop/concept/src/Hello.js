import React from "react";
import "./Hello.css";

function Hello(props) {
  return (
    <div class="hello" style={{ color: props.color }}>
      안녕하세용 {props.name}님
    </div>
  );
}

export default Hello;
