import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { authCompleted } = useSelector((state) => state.auth);
  return authCompleted ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
