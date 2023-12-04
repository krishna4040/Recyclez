import Auth from "./Sections/Auth";
import Home from './Sections/Home'
import Role from "./Sections/Role";
import Location from "./Sections/Location";
import Profile from './Sections/Profile'
import Waste from './Sections/Waste'
import RequestWaste from './components/waste/RequestWaste'
import AddWaste from './components/waste/AddWaste'
import Error from './Sections/Error'
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import Nav from "./components/navbar/Nav";

const App = () => {

  const { token } = useSelector(state => state.user);
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Auth />} />
        <Route path="/location" element={<Location />} />
        <Route path="/role" element={<Role />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/waste" element={<Waste />}>
          <Route path="/waste/request-waste" element={<RequestWaste />} />
          <Route path="/waste/add-waste" element={<AddWaste />} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
      {token && location.pathname !== '/role' && <Nav />}
    </div>
  );
};

export default App;