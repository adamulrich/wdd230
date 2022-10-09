date = new Date().getFullYear();
document.querySelector("#year").textContent = date;
document.querySelector("#timestamp").textContent= document.lastModified;

const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());
document.querySelector("#date").innerHTML = fullDate;

function toggleMenu() {
    document.getElementById("main_nav").classList.toggle("open");
    document.getElementById("ham_btn").classList.toggle("open");
}

const x = document.getElementById("ham_btn");
x.onclick = toggleMenu;

