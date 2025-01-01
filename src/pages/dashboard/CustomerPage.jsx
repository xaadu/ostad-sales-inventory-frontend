import { useEffect, useRef, useState } from "react";
import { destroyDataTable, makeDataTable } from "../../utils/datatable";
import myaxios from "../../utils/myaxios";
import CustomerUpdateModal from "../../components/customer/CustomerUpdateModal";
import CustomerCreateModal from "../../components/customer/CustomerCreateModal";
import CustomerDeleteModal from "../../components/customer/CustomerDeleteModal";

const CustomerPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const dataTable = useRef(null);

    const [dataToUpdate, setDataToUpdate] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
    });

    const [idToDelete, setIdToDelete] = useState(null);

    const loadData = () => {
        setIsLoading(true);
        myaxios.get("/list-customer")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const dt = makeDataTable(dataTable.current);

        // Cleanup Function
        return () => {
            destroyDataTable(dt);
        }
    }, [data]);

    useEffect(() => {
        loadData();
    }, []);


    const handleUpdate = (itemId) => {
        itemId = parseInt(itemId);
        const item = data.find((item) => item.id === itemId);

        setDataToUpdate({ ...item });
    };

    const handleDelete = (itemId) => {
        setIdToDelete(itemId);
    };

    if (isLoading) {
        return (
            <div id="loader" className="LoadingOverlay">
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="card px-5 py-5">
                            <div className="row justify-content-between ">
                                <div className="align-items-center col">
                                    <h4>Customer</h4>
                                </div>
                                <div className="align-items-center col">
                                    <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0 bg-gradient-primary">Create</button>
                                </div>
                            </div>
                            <hr className="bg-dark " />

                            <table className="table" id="tableData" ref={dataTable}>
                                <thead>
                                    <tr className="bg-light">
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tableList">
                                    {
                                        data.map((item, index) => (
                                            <tr key={item.id} className={index % 2 === 0 ? "even" : "odd"}>
                                                <td className="sorting_1">{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>
                                                    <button data-bs-toggle="modal" data-bs-target="#update-modal" type="button" className="btn editBtn btn-sm btn-outline-success" onClick={() => handleUpdate(item.id)}>Edit</button>
                                                    <button data-bs-toggle="modal" data-bs-target="#delete-modal" type="button" className="btn deleteBtn btn-sm btn-outline-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <CustomerCreateModal loadAllData={loadData} />

            <CustomerUpdateModal data={dataToUpdate} loadAllData={loadData} />

            <CustomerDeleteModal data={idToDelete} loadAllData={loadData} />
        </>
    );
};

export default CustomerPage;
