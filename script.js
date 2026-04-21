function updateTime() {
    const now = new Date();
    const timeString = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('current-time').innerText = timeString;
}

setInterval(updateTime, 1000);
updateTime();

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar.style.width === "0px") {
        sidebar.style.width = "16rem"; // buka lagi (w-64)
        sidebar.style.overflow = "visible";
    } else {
        sidebar.style.width = "0px"; // tutup
        sidebar.style.overflow = "hidden";
    }
}