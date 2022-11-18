import React from 'react';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Protected({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Please login first',
      showConfirmButton: false,
      timer: 1000,
    });
    return <Navigate to="/login" />;
  }

  return children;
}

export default Protected;
