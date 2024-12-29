import { useEffect, useState } from "react";
import myaxios from "../../utils/myaxios";
import { errorToast, successToast } from "../../utils/toast";


const defaultProfileData = {
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
}

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(defaultProfileData);

    useEffect(() => {
        myaxios.get("/user-profile")
            .then((response) => {
                let api_data = response.data?.data;
                if (api_data) {
                    setProfileData({
                        email: api_data.email,
                        firstName: api_data.firstName,
                        lastName: api_data.lastName,
                        mobile: api_data.mobile,
                        password: "",
                    });
                } else {
                    setProfileData(defaultProfileData);
                    errorToast("Failed to fetch profile data!");
                }
                setProfileData(response.data?.data);
            });
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (profileData.password === "") {
            delete profileData.password;
        }

        myaxios.post("/user-update", profileData)
            .then((response) => {
                if (response.data.status === "success") {
                    successToast("Profile Updated Successfully!");
                } else {
                    alert("Profile Update Failed!");
                    errorToast("Profile Update Failed!");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Profile Update Failed!");
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;  // Object Destructuring

        const newProfileData = {
            ...profileData,  // Spread Operator
            [name]: value,
        };

        setProfileData(newProfileData);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>User Profile</h4>
                            <hr />
                            <div className="container-fluid m-0 p-0">
                                <form onSubmit={handleUpdate}>
                                    <div className="row m-0 p-0">
                                        <div className="col-md-4 p-2">
                                            <label>Email Address</label>
                                            <input id="email" placeholder="User Email" className="form-control" type="email" value={profileData.email} readOnly disabled />
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>First Name</label>
                                            <input id="firstName" placeholder="First Name" className="form-control" type="text" name="firstName" value={profileData.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Last Name</label>
                                            <input id="lastName" placeholder="Last Name" className="form-control" type="text" name="lastName" value={profileData.lastName} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Mobile Number</label>
                                            <input id="mobile" placeholder="Mobile" className="form-control" type="mobile" name="mobile" value={profileData.mobile} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Password</label>
                                            <input id="password" placeholder="User Password" className="form-control" type="password" name="password" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row m-0 p-0">
                                        <div className="col-md-4 p-2">
                                            <button type="submit" className="btn mt-3 w-100  bg-gradient-primary">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
