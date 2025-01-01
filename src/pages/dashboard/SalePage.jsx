import { useEffect, useRef, useState } from "react";
import myaxios from "../../utils/myaxios";

const dtconfig = {
    "info": false,
    "lengthChange": false,
    "lengthMenu": [10],
}

const SalePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [invoiceCustomer, setInvoiceCustomer] = useState({ name: "", email: "", id: "" });
    const [invoiceProducts, setInvoiceProducts] = useState([]);
    const [invoiceData, setInvoiceData] = useState({
        total: 0,
        payable: 0,
        vat: 0,
        discount: 0,
    });

    const productTableRef = useRef(null);
    const customerTableRef = useRef(null);

    useEffect(() => {
        const dt1 = $(productTableRef.current).DataTable(dtconfig);
        const dt2 = $(customerTableRef.current).DataTable(dtconfig);

        return () => {
            dt1.destroy();
            dt2.destroy();
        };
    }, [products, customers]);

    useEffect(() => {
        const load_data = async () => {
            setIsLoading(true);
            try {
                const customer_list = await myaxios.get("/list-customer");
                console.log(customer_list);
                setCustomers(customer_list.data);

                const product_list = await myaxios.get("/list-product");
                console.log(product_list);
                setProducts(product_list.data);

                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        load_data();
    }, []);

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
                    <div className="col-md-4 col-lg-4 p-2">
                        <div className="shadow-sm h-100 bg-white rounded-3 p-3">
                            <div className="row">
                                <div className="col-8">
                                    <span className="text-bold text-dark">BILLED TO </span>
                                    <p className="text-xs mx-0 my-1">Name:  <span id="CName">{invoiceCustomer.name}</span> </p>
                                    <p className="text-xs mx-0 my-1">Email:  <span id="CEmail">{invoiceCustomer.email}</span></p>
                                    <p className="text-xs mx-0 my-1">User ID:  <span id="CId">{invoiceCustomer.id}</span> </p>
                                </div>
                                <div className="col-4">
                                    <img className="w-50" src="/images/logo.png" />
                                    <p className="text-bold mx-0 my-1 text-dark">Invoice  </p>
                                    <p className="text-xs mx-0 my-1">Date: {new Date().toLocaleDateString('en-CA')} </p>
                                </div>
                            </div>
                            <hr className="mx-0 my-2 p-0 bg-secondary" />
                            <div className="row">
                                <div className="col-12">
                                    <table className="table w-100" id="invoiceTable">
                                        <thead className="w-100">
                                            <tr className="text-xs">
                                                <td>Name</td>
                                                <td>Qty</td>
                                                <td>Total</td>
                                                <td>Remove</td>
                                            </tr>
                                        </thead>
                                        <tbody className="w-100" id="invoiceList">
                                            {
                                                invoiceProducts.map((product, index) => (
                                                    <tr className="text-xs" key={index}>
                                                        <td>{product.name}</td>
                                                        <td>{product.qty}</td>
                                                        <td>{product.total}</td>
                                                        <td>
                                                            <a className="btn remove text-xxs px-2 py-1  btn-sm m-0">
                                                                Remove
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr className="mx-0 my-2 p-0 bg-secondary" />
                            <div className="row">
                                <div className="col-12">
                                    <p className="text-bold text-xs my-1 text-dark">
                                        TOTAL: <i className="bi bi-currency-dollar"></i>
                                        <span id="total">{invoiceData.total}</span>
                                    </p>
                                    <p className="text-bold text-xs my-2 text-dark">
                                        PAYABLE: <i className="bi bi-currency-dollar"></i>
                                        <span id="payable">{invoiceData.payable}</span>
                                    </p>
                                    <p className="text-bold text-xs my-1 text-dark">
                                        VAT(5%): <i className="bi bi-currency-dollar"></i>
                                        <span id="vat">{invoiceData.vat}</span>
                                    </p>
                                    <p className="text-bold text-xs my-1 text-dark">
                                        Discount: <i className="bi bi-currency-dollar"></i>
                                        <span id="discount">{invoiceData.discount}</span>
                                    </p>
                                    <span className="text-xxs">Discount(%):</span>
                                    <input onkeydown="return false" value="0" min="0" type="number" step="0.25" onchange="DiscountChange()" className="form-control w-40 " id="discountP" />
                                    <p>
                                        <button onclick="createInvoice()" className="btn  my-3 bg-gradient-primary w-40">
                                            Confirm
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 p-2">
                        <div className="shadow-sm h-100 bg-white rounded-3 p-3">
                            <div id="productTable_wrapper" className="dataTables_wrapper no-footer">
                                {/* <div id="productTable_filter" className="dataTables_filter">
                                    <label>
                                        Search:
                                        <input type="search" className="" placeholder="" aria-controls="productTable" />
                                    </label>
                                </div> */}
                                <table className="table w-100 no-footer dataTable" id="productTable" aria-describedby="productTable_info" style={{ width: "505px" }} ref={productTableRef}>
                                    <thead className="w-100">
                                        <tr className="text-xs text-bold">
                                            <td className="sorting sorting_desc" tabindex="0" aria-controls="productTable" rowspan="1" colspan="1" aria-label="Product: activate to sort column ascending" style={{ width: "256px" }} aria-sort="descending">Product</td>
                                            <td className="sorting" tabindex="0" aria-controls="productTable" rowspan="1" colspan="1" aria-label="Pick: activate to sort column ascending" style={{ width: "177px" }}>Pick</td>
                                        </tr>
                                    </thead>
                                    <tbody className="w-100" id="productList">
                                        {
                                            products.map((product, index) => (
                                                <tr
                                                    className={`text-xs ${index % 2 === 0 ? "even" : "odd"}`}
                                                    key={index}
                                                >
                                                    <td className="sorting_1">
                                                        <img className="w-10" src={product.image} /> {product.name} ($ {product.price})
                                                    </td>
                                                    <td>
                                                        <a data-name={product.name} data-price={product.price} data-id={product.id} className="btn btn-outline-dark text-xxs px-2 py-1 addProduct  btn-sm m-0">
                                                            Add
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                        {/* <tr className="text-xs odd">
                                            <td className="sorting_1">
                                                <img className="w-10" src="./uploads/1-1692093134-2.jpg" /> sd ($ 52)</td>
                                            <td><a data-name="sd" data-price="52" data-id="2" className="btn btn-outline-dark text-xxs px-2 py-1 addProduct  btn-sm m-0">Add</a></td>
                                        </tr> */}
                                    </tbody>
                                </table>
                                {/* <div className="dataTables_paginate paging_simple_numbers" id="productTable_paginate">
                                    <a className="paginate_button previous disabled" aria-controls="productTable" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" id="productTable_previous">
                                        Previous
                                    </a>
                                    <span>
                                        <a className="paginate_button current" aria-controls="productTable" role="link" aria-current="page" data-dt-idx="0" tabindex="0">1</a>
                                    </span>
                                    <a className="paginate_button next disabled" aria-controls="productTable" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" id="productTable_next">Next</a>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 p-2">
                        <div className="shadow-sm h-100 bg-white rounded-3 p-3">

                            {/* <div id="customerTable_wrapper" className="dataTables_wrapper no-footer"><div id="customerTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="" placeholder="" aria-controls="customerTable" /></label></div> */}

                            <table className="table table-sm w-100 no-footer dataTable" id="customerTable" aria-describedby="customerTable_info" style={{ width: "505px" }} ref={customerTableRef}>
                                <thead className="w-100">
                                    <tr className="text-xs text-bold">
                                        <td className="sorting sorting_desc" tabindex="0" aria-controls="customerTable" rowspan="1" colspan="1" aria-label="Customer: activate to sort column ascending" style={{ width: "274px" }} aria-sort="descending">
                                            Customer
                                        </td>
                                        <td className="sorting" tabindex="0" aria-controls="customerTable" rowspan="1" colspan="1" aria-label="Pick: activate to sort column ascending" style={{ width: "159px" }}>
                                            Pick
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="w-100" id="customerList">
                                    {
                                        customers.map((customer, index) => (
                                            <tr className="text-xs odd" key={customer.id}>
                                                <td className="sorting_1">
                                                    <i className="bi bi-person"></i>
                                                    {customer.name}
                                                </td>
                                                <td>
                                                    <a data-name={customer.name} data-email={customer.email} data-id={customer.id} className="btn btn-outline-dark addCustomer  text-xxs px-2 py-1  btn-sm m-0">
                                                        Add
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            {/* <div className="dataTables_paginate paging_simple_numbers" id="customerTable_paginate"><a className="paginate_button previous disabled" aria-controls="customerTable" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" id="customerTable_previous">Previous</a><span><a className="paginate_button current" aria-controls="customerTable" role="link" aria-current="page" data-dt-idx="0" tabindex="0">1</a></span><a className="paginate_button next disabled" aria-controls="customerTable" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" id="customerTable_next">Next</a></div></div>
                             */}
                        </div>
                    </div>

                </div>
            </div >


            <div className="modal animated zoomIn" id="create-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Add Product</h6>
                        </div>
                        <div className="modal-body">
                            <form id="add-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <label className="form-label">Product ID *</label>
                                            <input type="text" className="form-control" id="PId" />
                                            <label className="form-label mt-2">Product Name *</label>
                                            <input type="text" className="form-control" id="PName" />
                                            <label className="form-label mt-2">Product Price *</label>
                                            <input type="text" className="form-control" id="PPrice" />
                                            <label className="form-label mt-2">Product Qty *</label>
                                            <input type="text" className="form-control" id="PQty" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button onclick="add()" id="save-btn" className="btn bg-gradient-success" >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalePage;
