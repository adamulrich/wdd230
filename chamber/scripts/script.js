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


const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    } else {
        img.src = src;
        img.removeAttribute("data-src");
    }
}

const loadImage = image => {
    image.classList.add('fade-in');
    image.src = image.dataset.src;
    image.srcset = image.dataset.srcset;
  }

const imgOptions = {
	root: document.querySelector('#scrollArea'),
	rootMargin: '10px',
	threshold: 1.0
};

const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

