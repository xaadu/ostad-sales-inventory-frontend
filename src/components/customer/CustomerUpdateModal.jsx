import { useRef } from "react";
import myaxios from "../../utils/myaxios";
import { errorToast, successToast } from "../../utils/toast";

const CustomerUpdateModal = ({ data, loadAllData }) => {
    const closeBtn = useRef(null);

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        myaxios.post("/update-customer", formDataObj)
            .then((response) => {
                if (response.data === 1) {
                    successToast("Customer updated successfully");
                    closeBtn.current.click();
                    loadAllData();
                } else {
                    console.error(response);
                    errorToast("Failed to update customer");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to update customer");
            });
    };

    return (
        <div className="modal animated zoomIn" id="update-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Customer</h5>
                    </div>
                    <div className="modal-body">
                        <form id="update-form" onSubmit={handleUpdate}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 p-1">
                                        <label className="form-label">Customer Name *</label>
                                        <input type="text" className="form-control" id="customerNameUpdate" name="name" defaultValue={data.name} />

                                        <label className="form-label mt-3">Customer Email *</label>
                                        <input type="text" className="form-control" id="customerEmailUpdate" name="email" defaultValue={data.email} />

                                        <label className="form-label mt-3">Customer Mobile *</label>
                                        <input type="text" className="form-control" id="customerMobileUpdate" name="mobile" defaultValue={data.mobile} />

                                        <input type="text" className="d-none" id="updateID" name="id" defaultValue={data.id} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id="update-modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn}>Close</button>
                        <button type="submit" id="update-btn" className="btn bg-gradient-success" form="update-form">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerUpdateModal;
