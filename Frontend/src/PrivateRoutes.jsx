import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const loggedIn = false;
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
