// set date values on footer
date = new Date();
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#timestamp").textContent= document.lastModified;

// set date value in header
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerHTML = fullDate;

// set banner for monday/tuesday
let dow = date.getDay();
if (dow == 1 | dow ==2) {
    let banner = document.getElementById("banner");
    banner.style.display = "block";
    banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

// toggle hamburger button
function toggleMenu() {
    document.getElementById("main_nav").classList.toggle("open");
    document.getElementById("ham_btn").classList.toggle("open");
}

// add event to toggle 
document.getElementById("ham_btn").onclick = toggleMenu;
