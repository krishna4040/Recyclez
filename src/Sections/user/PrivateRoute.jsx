import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth);

  return (
    <>
      {user.token ? (
        <Outlet />
      ) : (
        <Navigate to={"/auth"} />
      )}
    </>
  );
};

export default PrivateRoute;
