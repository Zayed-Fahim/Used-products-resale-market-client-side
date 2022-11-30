import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="container mx-auto mt-6 flex justify-center">
        <progress className="progress progress-info w-56"></progress>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;