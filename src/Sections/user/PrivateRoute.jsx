import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "../../RootImport.js";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth);

  return (
    <>
      {user.token ? (
        <>
          <div className="flex lg:flex-row flex-col lg:items-center">
            <Nav />
            <Outlet />
          </div>
        </>
      ) : (
        <Navigate to={"/auth"} />
      )}
    </>
  );
};

export default PrivateRoute;
