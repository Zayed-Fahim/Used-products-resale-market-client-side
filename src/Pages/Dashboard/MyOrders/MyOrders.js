import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  //USE REACT QUERY
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
        const res = await fetch(url, {
            headers: {
              authorization:`bearer ${localStorage.getItem('access-token')}`
          }
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mt-3">My Orders: {bookings.length}</h1>
      <div className="lg:mt-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Category</th>
                <th>Brand Name</th>
                <th>Phone Name</th>
                <th>Resale Price</th>
                <th>Phone Number</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => (
                <tr key={i} className="text-center">
                  <th>{i + 1}</th>
                  <td>{booking.category_name}</td>
                  <td>{booking.brand_name}</td>
                  <td>{booking.phone_name}</td>
                  <td>${booking.resale_price}</td>
                  <td>{booking.buyer_phone_no}</td>
                  <td>{booking.buyer_location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
