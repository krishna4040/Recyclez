import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  Auth,
  PrivateRoute,
  Dashboard,
  Profile,
  Location,
  Role,
  RequestWaste,
  AddWaste,
  Error,
} from "./RootImport.js";

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={!token && <Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/location" element={<Location />} />
          <Route path="/user/role" element={<Role />} />
          <Route path="/user/waste/request-waste" element={<RequestWaste />} />
          <Route path="/user/waste/add-waste" element={<AddWaste />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {token && location.pathname !== "/role" && <Nav />}
    </div>
  );
};

export default App;
