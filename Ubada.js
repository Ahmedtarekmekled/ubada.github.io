var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classlist.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classlist.remove("active-tab");
    }
}

var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}



