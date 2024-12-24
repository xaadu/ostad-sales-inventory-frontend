import { Link } from "react-router";


const Navbar = ({ navOpenHandler }) => {
    return (
        <nav className="navbar fixed-top px-0 shadow-sm bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="icon-nav m-0 h5" onClick={navOpenHandler}>
                        <img className="nav-logo-sm mx-2" src="/images/menu.svg" alt="logo" />
                    </span>
                    <img className="nav-logo  mx-2" src="/images/logo.png" alt="logo" />
                </a>

                <div className="float-right h-auto d-flex">
                    <div className="user-dropdown">
                        <img className="icon-nav-img" src="/images/user.webp" alt="" />
                        <div className="user-dropdown-content ">
                            <div className="mt-4 text-center">
                                <img className="icon-nav-img" src="/images/user.webp" alt="" />
                                <h6>User Name</h6>
                                <hr className="user-dropdown-divider  p-0" />
                            </div>
                            <Link to="/dashboard/profile/" className="side-bar-item">
                                <span className="side-bar-item-caption">Profile</span>
                            </Link>
                            <Link to={`/logout/`} className="side-bar-item">
                                <span className="side-bar-item-caption">Logout</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
