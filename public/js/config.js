// function showLoader() {
//     document.getElementById('loader').classList.remove('d-none')
// }
// function hideLoader() {
//     document.getElementById('loader').classList.add('d-none')
// }

function successToast(msg) {
    Toastify({
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        text: msg,
        className: "mb-5",
        style: {
            background: "green",
        }
    }).showToast();
}

function errorToast(msg) {
    Toastify({
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        text: msg,
        className: "mb-5",
        style: {
            background: "red",
        }
    }).showToast();
}

function MenuBarClickHandler() {
    let sideNav = document.getElementById('sideNavRef');
    let content = document.getElementById('contentRef');
    if (sideNav.classList.contains("side-nav-open")) {
        sideNav.classList.add("side-nav-close");
        sideNav.classList.remove("side-nav-open");
        content.classList.add("content-expand");
        content.classList.remove("content");
    } else {
        sideNav.classList.remove("side-nav-close");
        sideNav.classList.add("side-nav-open");
        content.classList.remove("content-expand");
        content.classList.add("content");
    }
}

$(document).ready(function() {
    new DataTable('#tableData', {
        order: [[0, 'desc']],
        lengthMenu: [5, 10, 15, 20, 30],
        columnDefs: [
            { width: "20%", targets: "_all" },
            { width: "100px", targets: 0 }
        ]
    });
});