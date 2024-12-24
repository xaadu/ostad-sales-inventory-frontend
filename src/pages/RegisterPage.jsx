import { useNavigate } from "react-router";
import myaxios from "../utils/myaxios";

const RegisterPage = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        console.log(data);

        navigate("/login/");

        myaxios.post(
            "/user-registration",
            data,
        ).then((response) => {
            if (response.data.status === "success") {
                navigate("/login/");
            } else {
                console.error(response.data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10 center-screen">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h4>Sign Up</h4>
                                <hr />
                                <div className="container-fluid m-0 p-0">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <label>Email Address</label>
                                                <input id="email" placeholder="User Email" className="form-control" type="email" name="email" />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>First Name</label>
                                                <input id="firstName" placeholder="First Name" className="form-control" type="text" name="firstName" />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Last Name</label>
                                                <input id="lastName" placeholder="Last Name" className="form-control" type="text" name="lastName" />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Mobile Number</label>
                                                <input id="mobile" placeholder="Mobile" className="form-control" type="mobile" name="mobile" />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Password</label>
                                                <input id="password" placeholder="User Password" className="form-control" type="password" name="password" />
                                            </div>
                                        </div>
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <button type="submit" className="btn mt-3 w-100  bg-gradient-primary">Complete</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
