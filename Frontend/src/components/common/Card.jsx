import React from "react";
import CardLayout from "../layouts/CardLayout";
import Button from "../common/Button";
//import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Card = ({ productId, image, name, desc, price, category }) => {
  const { authCompleted } = useSelector((state) => state.auth ?? false);
  const { username, id } = useSelector((state) => state.auth ?? "");

  const userLogged = () => {
    // authCompleted ? toast("added to cart") : toast("not logged in");
  };

  return (
    <CardLayout className="rounded-xl">
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
          <Link to={`/item/${name}/${productId}`}>
            <Button
              text="Buy Now"
              className="px-3 py-1 text-sm"
              handler={userLogged}
            />
          </Link>
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
