let tc = document.getElementById("tc")
function tostify(type, msg) {
    let icon
    if (type == "bg-danger")
        icon = `<i class="bi bi-x-diamond fs-4 me-2"></i>`

    if (type == "bg-success")
        icon = `<i class="bi bi-check2-circle"></i>`

    if (type == "bg-warning")
        icon = `<i class="bi bi-exclamation-triangle-fill"></i>`

    if (type == "bg-dark")
        icon = `<i class="bi bi-check2-circle"></i>`



    let toast = document.createElement("div")
    toast.classList.add("toastify", "p-4", type)
    toast.innerHTML = icon + msg
    tc.appendChild(toast)
    setTimeout(function () {
        toast.remove()
    }, 5000)
}