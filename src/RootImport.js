// Components
export { default as Error } from "./Sections/Error";
export { default as Nav } from "./components/navbar/Nav";
export { default as HomeNav } from "./components/navbar/HomeNav";
export { default as Home } from "./Sections/Home";
export { default as AboutUs } from "./Sections/AboutUs";
export { default as Auth } from "./Sections/Auth";
export { default as Login } from "./components/Auth/Login";
export { default as Signup } from "./components/Auth/Signup";
export { default as OAuth } from "./components/Auth/OAuth";
export { default as PrivateRoute } from "./Sections/user/PrivateRoute";
export { default as Dashboard } from "./Sections/user/Dashboard";
export { default as Profile } from "./Sections/user/Profile";
export { default as Role } from "./Sections/user/Role";
export { default as Location } from "./Sections/user/Location";
export { default as SearchLocationBox } from "./components/Location/SearchBox";
export { default as Stats } from "./components/Stats/Stats";
export { default as User } from "./components/User/UserCard";

// store
export { setUser as setUser } from "./store/slice/userSlice";
export { setToken as setToken } from "./store/slice/authSlice";
export { setRole as setRole } from "./store/slice/userSlice";

// Assets
export { default as LOGO } from "./assets/bg.png";
export { default as ABOUTMASTIMAGE } from "./assets/bg2.jpg";
export { default as DASHBOARDIMAGE } from "./assets/bg3.png";
export { default as MAPIMG } from "./assets/map.png";
export { default as EWASTE } from "./assets/ewaste.png";
