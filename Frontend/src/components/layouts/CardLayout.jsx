import React from "react";

const CardLayout = (props) => {
  return (
    <div
      className={`rounded-xl shadow-xl ${props.className}`}
      onClick={props?.handler}
    >
      {props.children}
    </div>
  );
};

export default CardLayout;
