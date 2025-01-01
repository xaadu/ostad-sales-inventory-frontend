const makeDataTable = (element) => {
    return $(element).DataTable({
        order: [[0, 'desc']],
        lengthMenu: [5, 10, 15, 20, 30],
        columnDefs: [
            { width: "20%", targets: "_all" },
            { width: "100px", targets: 0 }
        ]
    });
};

const destroyDataTable = (dataTableInstance) => {
    dataTableInstance.destroy();
};

export { makeDataTable, destroyDataTable };
