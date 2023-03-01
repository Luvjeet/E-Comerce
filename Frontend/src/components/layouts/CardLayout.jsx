import React from "react";

const CardLayout = (props) => {
  return (
    <div
      className={`rouunded-xl shadow-lg ${props.className}`}
      onClick={props?.handler}
    >
      {props.children}
    </div>
  );
};

export default CardLayout;
