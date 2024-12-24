import { Outlet, Navigate } from "react-router";

const Guard = () => {
    const token = localStorage.getItem("token");

    // return token ? <Outlet /> : <h1 style={{ color: "red" }}>Not Authorized</h1>;
    return token ? <Outlet /> : <Navigate to={"/login/"} />;
};

export default Guard;
