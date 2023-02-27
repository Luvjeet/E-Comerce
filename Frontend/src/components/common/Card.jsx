import React from "react";
import CardLayout from "../layouts/CardLayout";

const Card = ({ image, name, desc, price, category }) => {
  return (
    <CardLayout className="border text-center flex flex-col items-center">
      <div className="h-56 w-56 mb-4">
        <img
          src={`http://localhost:8000${image}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-black">
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <span>{desc}</span>
        <span>{category}</span>
      </div>
    </CardLayout>
  );
};

export default Card;
