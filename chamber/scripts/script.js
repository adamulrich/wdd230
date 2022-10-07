date = new Date().getFullYear();
document.querySelector("#year").textContent = date;
document.querySelector("#timestamp").textContent= document.lastModified;

// const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());
// document.querySelector("#date").innerHTML = fullDate;

// const hamBtn = document.querySelector('#hamBtn');
// const mainNav = document.querySelector('#mainNav')

// hamBtn.addEventListener('click', () => {mainNav.classList.toggle('open')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('open')};

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;

