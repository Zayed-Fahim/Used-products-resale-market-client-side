import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useBuyer from "../../../hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return (
      <div className="container mx-auto mt-6 flex justify-center">
        <progress className="progress progress-info w-56"></progress>
      </div>
    );
  }
  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default BuyerRoute;
