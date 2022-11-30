import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleBookNowInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const brand = form.brand.value;
    const phoneName = form.phoneName.value;
    const resaleValue = form.resalePrice.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      buyer_name: name,
      buyer_email: email,
      category_name: category,
      brand_name: brand,
      phone_name: phoneName,
      resale_price: resaleValue,
      buyer_phone_no: phone,
      buyer_location: location,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setProduct(null);
          toast.success("Congratulations!! Booking Confirmed");
          navigate("/dashboard/myorders");
        }
      });
  };
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
                name="name"
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
                name="email"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={product?.category_name}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                defaultValue={product?.brand}
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
                name="phoneName"
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
                type="number"
                name="resalePrice"
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
                type="phone"
                name="phone"
                placeholder="Your phone"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Your location"
                className="input input-bordered w-full"
                required
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
