const submenu = document.getElementById("submenu");

function toggleSubMenu() {
    switch(submenu.style.display) {
    case "none":
        submenu.style.display = "block";
        break;
    case "block":
        submenu.style.display = "none";
        break;
    default:
        submenu.style.display = "none";
    }
}