import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../common/Card";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products?.allProducts);

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {allProducts?.map((product) => (
          <Card
            name={product.productName}
            desc={product.desc}
            price={product.price}
            category={product.category}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
