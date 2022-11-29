import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const handleBookNowInfo = (event) => {
        event.preventDefault();
    }
    
  return (
    <div>
      <input type="checkbox" id="book-now" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-now"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBookNowInfo}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Item name</span>
              </label>
              <input
                type="text"
                defaultValue={product?.phone_name}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                type="text"
                defaultValue={product?.resale_price}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your phone</span>
              </label>
              <input
                type="text"
                placeholder="Your phone"
                className="input input-bordered w-full"
              />
            </div>
            <input className="btn w-full mt-4" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
