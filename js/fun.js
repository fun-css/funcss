// funcss framework js MIT
const sidebarTrigger = document.querySelector('.sidebar-trigger');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
sidebarTrigger.addEventListener('click', ()=> sidebar.style.width = "250px")
closeSidebar.addEventListener('click', ()=> sidebar.style.width = "0px")
//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
