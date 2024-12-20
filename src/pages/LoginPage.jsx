import myaxios from "../utils/myaxios";

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        console.log(data);

        myaxios.post(
            "/user-login",
            data,
        ).then((response) => {
            if (response.data.status === "success") {
                localStorage.setItem("token", response.data.token);
            } else {
                alert(response.data.message);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 animated fadeIn col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <input id="email" placeholder="User Email" className="form-control" type="email" name="email" />
                                    <br />
                                    <input id="password" placeholder="User Password" className="form-control" type="password" name="password" />
                                    <br />
                                    <button type="submit" className="btn w-100 bg-gradient-primary">
                                        Next
                                    </button>
                                    <hr />
                                    <div className="float-end mt-3">
                                        <span>
                                            <a className="text-center ms-3 h6" href="userRegistration.html">Sign Up </a>
                                            <span className="ms-1">|</span>
                                            <a className="text-center ms-3 h6" href="sendOtp.html">Forget Password</a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage