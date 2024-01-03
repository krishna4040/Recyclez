import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "../../RootImport.js";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth);

  return (
    <>
      {user.token ? (
        <>
          <Nav />
          <Outlet />
        </>
      ) : (
        <Navigate to={"/auth"} />
      )}
    </>
  );
};

export default PrivateRoute;
