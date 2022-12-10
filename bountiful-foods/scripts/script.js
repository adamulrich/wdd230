// set date values on footer
date = new Date();
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#timestamp").textContent= document.lastModified;
var URL
// handle case where no index.html is specified in url
if (document.URL.split("/").slice(-2)[0] =='bountiful-foods' &
    document.URL.split("/").slice(-1)[0] == '') {
    URL = "index.html"
}
else {
    URL = document.URL.split("/").slice(-1)[0]
}

// set date value in header
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerHTML = fullDate;


// toggle hamburger button
function toggleMenu() {
    document.getElementById("main_nav").classList.toggle("open");
    document.getElementById("ham-btn").classList.toggle("open");
    document.getElementById("main_nav").classList.toggle("closed");
}

// add event to toggle 
document.getElementById("ham-btn").onclick = toggleMenu;

// highlight current menu item
const mainNav = document.getElementById("main_nav");
const mainNavChildren = mainNav.children;

for (let i = 0; i < mainNavChildren.length; i++) {
    if (mainNavChildren[i].children[0].href.split("/").slice(-1)[0] == URL) {
        mainNavChildren[i].children[0].classList.add('current-menu');
    }

}




// // lazy loading images
// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
//     } else {
//         img.src = src;
//         img.removeAttribute("data-src");
//     }
// }

// const loadImage = image => {
//     image.classList.add('fade-in');
//     image.src = image.dataset.src;
//     image.srcset = image.dataset.srcset;
//   }

// const imgOptions = {
// 	root: document.querySelector('#scrollArea'),
// 	rootMargin: '10px',
// 	threshold: 1.0
// };

// const imgObserver = new IntersectionObserver((entries,
//     imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// })


// // set drink order date on fresh page

if (URL == "fresh.html") {
    document.getElementById("drink-date").value = date.getTime();
}

if (URL == "index.html") {

    // initialize display elements
    const numDrinksDisplay = document.getElementById("drink-counter");

    // get the stored value in localStorage
    let numDrinks = localStorage.numDrinks

    // determine if this is the first visit or display the number of visits.
    if (numDrinks != undefined) {
        numDrinksDisplay.innerText = numDrinks;

    } else {
        numDrinksDisplay.innerText = 0;
        localStorage.numDrinks = 0;
    }

// load data into select elements
}
