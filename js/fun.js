// funcss framework js MIT
const sidebarTrigger = document.querySelector('.sidebar-trigger');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
sidebarTrigger.addEventListener('click', ()=> sidebar.style.width = "250px")
closeSidebar.addEventListener('click', ()=> sidebar.style.width = "0px")