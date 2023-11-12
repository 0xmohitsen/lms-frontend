import { useSelector } from "react-redux";
import HomeLayout from "../layouts/HomeLayout";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({ allowedRoles }){

    const {isLoggedIn , role} = useSelector((state) => state.auth);

    return isLoggedIn && allowedRoles.find((myrole) => myrole == role) ? <Outlet/> : isLoggedIn ? (<Navigate to="/denied" />) : (<Navigate to="/login"/>)
}

export default RequireAuth;