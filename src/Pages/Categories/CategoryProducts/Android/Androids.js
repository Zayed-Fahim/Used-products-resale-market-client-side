import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import Android from "./Android";

const Androids = () => {
  const [product, setProduct] = useState(null);

  //USE REACT QUERY
  const { data: androids = [] } = useQuery({
    queryKey: ["androids"],
    queryFn: () =>
      fetch(
        "https://used-products-resale-server-five.vercel.app/androids"
      ).then((res) => res.json()),
  });
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl text-blue-600 my-10 font-bold text-center">
          Find your next Android here!!
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-20 my-20">
          {androids.map((android) => (
            <Android
              key={android._id}
              android={android}
              setProduct={setProduct}
            ></Android>
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

export default Androids;
