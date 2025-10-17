const  menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    sidebar.classList.toggle("active")
})

document.addEventListener("click", (event) => {
    const isClickInSidebar = sidebar.contains(event.target);
    const isClickOnbutton = menuBtn.contains (event.target);

    if(!isClickInSidebar && !isClickOnbutton) {
        sidebar.classList.remove("active")
    }
})

