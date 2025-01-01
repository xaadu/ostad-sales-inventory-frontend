import { useRef } from "react";
import myaxios from "../../utils/myaxios";
import { errorToast, successToast } from "../../utils/toast";

const CustomerDeleteModal = ({ data, loadAllData }) => {
    const closeBtn = useRef(null);

    const handleDelete = (e) => {
        e.preventDefault();

        myaxios.post("/delete-customer", { id: data })
            .then((response) => {
                if (response.data === 1) {
                    successToast("Customer removed successfully");
                    closeBtn.current.click();
                    loadAllData();
                } else {
                    console.error(response);
                    errorToast("Failed to remove customer");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to remove customer");
            });
    };


    return (
        <div className="modal animated zoomIn" id="delete-modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <h3 className=" mt-3 text-warning">Delete !</h3>
                        <p className="mb-3">Once delete, you can't get it back.</p>
                        <input className="d-none" id="deleteID" />
                    </div>
                    <div className="modal-footer justify-content-end">
                        <div>
                            <button type="button" id="delete-modal-close" className="btn mx-2 bg-gradient-primary" data-bs-dismiss="modal" ref={closeBtn}>Cancel</button>
                            <button type="button" id="confirmDelete" className="btn  bg-gradient-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDeleteModal