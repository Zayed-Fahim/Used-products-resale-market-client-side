import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogIn = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Log In successfully')
      })
      .catch((error) => console.error(error));
    };
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
              console.log(user);
              toast.success("Log In successfully");
                navigate('/')
        })
    }
    
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogIn)}>
            <h1 className="text-5xl font-bold my-10 text-center">Log In</h1>
            <div className="card-body w-[380px] lg:w-[30rem]">
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
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="my-2 text-center">
                New user?
                <Link className="text-primary font-bold" to="/signup">
                  {" "}
                  Sign up
                </Link>
              </p>
              <div className="divider">OR</div>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
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

export default Login;
