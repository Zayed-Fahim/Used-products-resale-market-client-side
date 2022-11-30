import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import Iphone from "./Iphone";
  
const Iphones = () => {
  const [product, setProduct] = useState(null);

  //USE REACT QUERY
  const { data: iphones = [] } = useQuery({
    queryKey: ["iphones"],
    queryFn: () =>
      fetch("http://localhost:5000/iphones").then((res) => res.json()),
  });
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl text-blue-600 my-10 font-bold text-center">
          Find your next iPhone here!!
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-20 my-20">
          {iphones.map((iphone) => (
            <Iphone
              key={iphone._id}
              iphone={iphone}
              setProduct={setProduct}
            ></Iphone>
          ))}
        </div>
        {product && (
          <BookingModal
            setProduct={setProduct}
            product={product}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default Iphones;
