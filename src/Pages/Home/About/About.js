import React from "react";
import img from "../../../assets/about/img-1.jpg";

const About = () => {
  return (
    <div className="container mx-auto lg:flex lg:gap-44">
      <div>
        <img className="lg:w-[600px] lg:h-[450px] w-[400px] rounded-lg" src={img} alt="" />
      </div>
      <div className="lg:w-[600px]">
        <p className="text-blue-700 font-bold text-xl mb-5 mt-5 lg:mt-0">About Us</p>
        <h1 className="lg:text-4xl text-3xl font-bold leading-normal lg:w-[450px] mx-auto">
          We are trusted & provides best quality  second hand
          mobile,tablet/ipad or iphone.
        </h1>
        <p className="text-xl my-5">
          There are many variations of passages of Lorem Ipsum available, but 
          the majority have suffered alteration in some form, by injected 
          humour, or randomized words which don't look even slightly believable. 
        </p>
        <p className="text-xl my-5">
          The majority have suffered alteration in some form, by injected
          humour,  or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
