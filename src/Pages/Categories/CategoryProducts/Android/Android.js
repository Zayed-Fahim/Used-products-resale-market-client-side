import React from "react";
import { TiTick } from "react-icons/ti";

const Android = ({ android, setProduct }) => {
  const {
    image,
    phone_name,
    brand,
    seller_name,
    year_of_use,
    original_price,
    resale_price,
    verified,
    location,
  } = android;
  return (
    <div className="card bg-base-100 shadow-xl container mx-auto">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {phone_name}
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <div className="flex justify-between">
          <div className="flex">
            <p>
              <strong>Seller:</strong> {seller_name}
            </p>
            <p>
              {verified === true ? (
                <TiTick className="text-blue-600 h-6 w-6 ml-1"></TiTick>
              ) : (
                ""
              )}
            </p>
          </div>
          <div>
            <p>
              <strong>Year of use:</strong> {year_of_use}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>
            <strong>Original Price: </strong>{" "}
            <span className="line-through">${original_price}</span>
          </p>
          <p className="ml-14">
            <strong>Resale Price:</strong> ${resale_price}
          </p>
        </div>
        <div className="flex justify-between items-center flex-nowrap">
          <div className="">
            <strong>Location:</strong> {location}
          </div>
          <div>
            <label
              onClick={() => setProduct(android)}
              htmlFor="book-now"
              className="btn btn-active btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Android;
