import React from 'react';
import axios from 'axios';

const LogoutButton = () => {

  const handleLogout = () => {
    axios.post('http://localhost:8080/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('LoginToken')}`
      }
    })
    .then(() => {
      localStorage.clear();
      window.location.href = '/login';
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
