import { Navigate, Outlet } from "react-router";
import Navbar from "../partials/Navbar";
import SideBar from "../partials/SideBar";
import { useState } from "react";

const DashboardLayout = () => {
    const token = localStorage.getItem("token");

    // return token ? <Outlet /> : <h1 style={{ color: "red" }}>Not Authorized</h1>;
    if (!token) return <Navigate to={"/login/"} />;

    const [isNavOpen, setIsNavOpen] = useState(true);

    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <>
            <Navbar isNavOpen={isNavOpen} navOpenHandler={handleNavOpen} />
            <div id="sideNavRef" className={isNavOpen ? "side-nav-open" : "side-nav-close"}>
                <SideBar />
            </div>
            <div id="contentRef" className={isNavOpen ? "content" : "content-expand"}>
                <Outlet />
            </div>
        </>
    );
};

export default DashboardLayout;
