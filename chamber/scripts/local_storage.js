// initialize display elements
const visitsDisplay = document.getElementById("visits");
const daysSinceVisit = document.getElementById("days-since-last-visit");

// get the stored value in localStorage
let numVisits = localStorage.numVisits

// determine if this is the first visit or display the number of visits.
if (numVisits != undefined) {
	visitsDisplay.textContent = numVisits;
    numVisits ++;
    localStorage.numVisits = numVisits;
    visitsDisplay.innerText = numVisits;

} else {
	visitsDisplay.textContent = '0';
    localStorage.numVisits = 1;
}

// increment the number of visits.

let date = new Date();

// if the date isn't in storage, put it there
if (localStorage.lastVisitDate == undefined) {
    localStorage.lastVisitDate = '' + date.getTime();  
    daysSinceVisit.innerText = "0"
} else {
    // get the storage and calculate
    let storageDate = new Date(parseInt(localStorage.lastVisitDate, 10));
    let daysSinceLastVisit = ((date - storageDate)/86400000).toString().substring(1,8);
    daysSinceVisit.innerText = daysSinceLastVisit;
    localStorage.lastVisitDate = '' + date.getTime();  
    
}
