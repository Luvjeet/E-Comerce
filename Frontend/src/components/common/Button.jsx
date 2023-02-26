import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-primary text-white rounded hover:bg-primary/80 ${props.className}`}
      type={props.type || "button"}
      onClick={props?.handler}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
