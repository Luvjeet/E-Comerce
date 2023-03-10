import React from "react";
import CardLayout from "../layouts/CardLayout";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Card = ({ image, name, desc, price, category }) => {
  const { authCompleted } = useSelector((state) => state.auth ?? false);
  const { username, id } = useSelector((state) => state.auth ?? "");

  const userLogged = () => {
    authCompleted ? toast("added to cart") : toast("not logged in");
  };

  return (
    <CardLayout className="border ">
      <figure className="h-56 w-auto mb-6">
        <img
          src={`${import.meta.env.VITE_BASE_URL}${image}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </figure>
      <figcaption className="text-black w-full p-6 h-fit">
        <div className="flex justify-between text-xl mb-3">
          <p>{name}</p>
          <Button
            text="Add to Cart"
            className="px-3 py-1 text-sm"
            handler={userLogged}
          />
        </div>
        <div className="text-lg">
          Price:<b> ₹{price}</b>
        </div>
        <div className="text-left mt-2">
          {desc.length > 30 ? desc.substring(0, 28) + "..." : desc}
        </div>
      </figcaption>
    </CardLayout>
  );
};

export default Card;
