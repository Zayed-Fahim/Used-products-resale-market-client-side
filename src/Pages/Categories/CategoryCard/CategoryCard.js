import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_name, image,_name} = category;
  return (
    <div className="lg:p-0 p-3">
      <Link to={`/categories/${_name}`}>
        <div className="card bg-base-100 shadow-xl lg:h-[350px]">
          <figure>
            <img className="h-[258px]" src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{category_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
