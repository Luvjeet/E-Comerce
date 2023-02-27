import React from "react";

const CardLayout = (props) => {
  return (
    <div
      className={`rouunded-xl shadow-lg p-6 ${props.className}`}
      onClick={props?.handler}
    >
      {props.children}
    </div>
  );
};

export default CardLayout;
