import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  AboutUs,
  Auth,
  PrivateRoute,
  Dashboard,
  Profile,
  Location,
  Role,
  Error,
} from "./RootImport.js";

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/auth" element={!token && <Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/location" element={<Location />} />
          <Route path="/user/role" element={<Role />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
