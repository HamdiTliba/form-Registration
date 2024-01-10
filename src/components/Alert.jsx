import React, { useEffect, useState } from "react";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowAlert(false), 3000);
  }, []);
  return (
    showAlert && (
      <div className="alert transbounce ">Registration was successful!</div>
    )
  );
};

export default Alert;
