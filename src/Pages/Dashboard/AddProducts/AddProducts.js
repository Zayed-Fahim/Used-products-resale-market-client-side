import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const [condition, setCondition] = useState(null);
    const [category, setCategory] = useState(null);
    console.log(condition,category)
    const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    } = useForm();
    
    const handleCondition = (event) => {
        setCondition(event.target.value)
        
    }
    const handleCategory = (event) => {
        setCategory(event.target.value)
    }
    const handleAddProduct = (data) => {
      console.log(data)
        const image = data.productImage[0];
        console.log(image)
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const productDetails = {
            Phone_name: data.phoneName,
            image: imgData.data.url,
            condition: condition,
            seller_number: data.phone,
            location: data.location,
            category_name: category,
            description: data.description,
            year_of_use: data.purchaseYear,
            brand: data.brand,
          };
            fetch("http://localhost:5000/sellers-product", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("access-token")}`,
              },
              body: JSON.stringify(productDetails),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Product posted successfully');
                    navigate("/dashboard/myproducts");
            })
          }
      });
  };
  return (
    <div className="mt-20 lg:w-[700px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <h1 className="text-5xl font-bold my-10 text-center">
              Add your products to sell
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  {...register("phoneName", { required: true })}
                  aria-invalid={errors.phoneName ? "true" : "false"}
                  type="text"
                  placeholder="phone Name"
                  className="input input-bordered"
                />
              </div>
              {errors.phoneName?.type === "required" && (
                <p className="text-red-600" role="alert">
                  phone name is required
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  {...register("productImage", { required: true })}
                  aria-invalid={errors.productImage ? "true" : "false"}
                  type="file"
                  className="input input-bordered h-24"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Product image is required
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <select
                  onChange={handleCondition}
                  name="option"
                  className="border-2 border-base-400 h-12 pl-3 rounded-lg outline-none"
                >
                  <option disabled>Condition of your products</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your phone number</span>
                </label>
                <input
                  {...register("phone", {
                    required: true,
                    minLength: 11,
                    maxLength: 14,
                  })}
                  aria-invalid={errors.phone ? "true" : "false"}
                  type="number"
                  placeholder="Your Phone number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Location</span>
                </label>
                <input
                  {...register("location", { required: true })}
                  aria-invalid={errors.location ? "true" : "false"}
                  type="text"
                  placeholder="Your Location"
                  className="input input-bordered"
                />
              </div>
              <select
                onChange={handleCategory}
                name="option"
                className="border-2 border-base-400 h-12 pl-3 rounded-lg outline-none"
              >
                <option>
                  Choose phone Category
                </option>
                <option value="android">Android</option>
                <option value="iphone">iPhone</option>
                <option value="tablet/ipad">Tablet/iPad</option>
              </select>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product description</span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  aria-invalid={errors.description ? "true" : "false"}
                  type="textArea"
                  placeholder="Description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year of purchase</span>
                </label>
                <input
                  {...register("purchaseYear", { required: true })}
                  aria-invalid={errors.purchaseYear ? "true" : "false"}
                  type="number"
                  placeholder="Purchase year of your product"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Brand</span>
                </label>
                <input
                  {...register("brand", { required: true })}
                  aria-invalid={errors.brand ? "true" : "false"}
                  type="text"
                  placeholder="Product brand"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-2xl">
                  Submit For Selling
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
