import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "../Category/Category";



const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json())
  });
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl mt-20 font-semibold">Find your desire products</h1>
      <div className="container mx-auto mt-20 grid lg:grid-cols-3 grid-cols-1 gap-20">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
