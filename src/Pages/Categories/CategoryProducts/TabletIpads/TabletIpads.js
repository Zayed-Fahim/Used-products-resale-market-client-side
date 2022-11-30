import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import TabletIpad from "./TabletIpad";

const TabletIpads = () => {
  const [product, setProduct] = useState(null);
  
  //USE REACT QUERY
  const { data: tabletIpads = [] } = useQuery({
    queryKey: ["tabletIpads"],
    queryFn: () =>
      fetch("http://localhost:5000/tablet-ipads").then((res) => res.json()),
  });
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl text-blue-600 my-10 font-bold text-center">
          Find your next Tablet/iPad here!!
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-20 my-20">
          {tabletIpads.map((tabletIpad) => (
            <TabletIpad
              key={tabletIpad._id}
              tabletIpad={tabletIpad}
              setProduct={setProduct}
            ></TabletIpad>
          ))}
        </div>
        {product && <BookingModal setProduct={setProduct} product={product}></BookingModal>}
      </div>
    </div>
  );
};

export default TabletIpads;
