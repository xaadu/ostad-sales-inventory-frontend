import { useNavigate } from "react-router";
import myaxios from "../utils/myaxios";

const SetPasswordPage = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        console.log(data);
        navigate("/dashboard/");

        // myaxios.post(
        //     "/reset-password",
        //     data,
        // ).then((response) => {
        //     if (response.data.status === "success") {
        //         navigate("/dashboard/");
        //     } else {
        //         console.error(response.data);
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card animated fadeIn w-90  p-4">
                            <div className="card-body">
                                <h4>NEW PASSWORD</h4>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <label>Your new password</label>
                                    <input id="password" placeholder="New Password" className="form-control" type="password" name="password" />
                                    <br />
                                    <button type="submit" className="btn w-100 float-end bg-gradient-primary">
                                        Next
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetPasswordPage;
