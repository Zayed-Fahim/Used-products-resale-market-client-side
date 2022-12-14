import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState(null);
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            toast.success("Account created successfully");
            saveUserInfo(data.name, data.email, role);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleSignUp = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Account created successfully");
    });
  };
  const handleRoleEmailSignUpUser = (event) => {
    setRole(event.target.value);
  };
  const saveUserInfo = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <h1 className="text-5xl font-bold my-10 text-center">Sign Up</h1>
            <div className="card-body w-[380px] lg:w-[30rem]">
              <select
                name="option"
                onChange={handleRoleEmailSignUpUser}
                className="w-28 border-2 border-blue-600 outline-none"
              >
                <option>Sign up as</option>
                <option value="Admin">Admin</option>
                <option value="Seller">Seller</option>
                <option value="Buyer">Buyer</option>
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Name is required
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Make your password strong",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <p className="my-2 text-center">
                Already have an account?
                <Link className="text-primary font-bold" to="/login">
                  {" "}
                  Log in
                </Link>
              </p>
              <div className="divider">OR</div>
            </div>
          </form>
          <button
            onClick={handleGoogleSignUp}
            className="flex justify-center items-center gap-3 border-4 p-3 rounded-lg lg:w-[26rem] w-[19.75rem] h-[3rem] lg:h-[3rem] mx-auto mb-16"
          >
            <div>
              <FcGoogle className="w-6 h-6"></FcGoogle>
            </div>
            <div>
              <p>GOOGLE</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
