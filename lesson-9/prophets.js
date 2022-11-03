const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let prophetName = document.createElement('h2');
    let portrait = document.createElement('img');
    let portraitCaption = document.createElement('p');
    let birth = document.createElement('h3');
  
    let caption = `Portrait of ${prophet.name} ${prophet.lastname}, ${prophet.order}${getOrdinal(prophet.order)} Latter-day President`;

    // Change the textContent property of the h2 element to contain the prophet's full name
    prophetName.textContent = `${prophet.name} ${prophet.lastname}`;

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', caption);
    portrait.setAttribute('loading', 'lazy');
    
    portraitCaption.textContent = caption;
    portraitCaption.classList.add('caption')

    birth.textContent = `Born ${prophet.birthdate} in ${prophet.birthplace}`;


    // Add/append the section(card) with the h2 element
    card.appendChild(prophetName);
    card.appendChild(portrait);
    card.appendChild(portraitCaption);
    card.appendChild(birth);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


function getOrdinal(value) {
    var s = String(value),
    len = s.length,
    end  = s.substring(len - 1, 1),
    teen = len > 1 && s.substring(len - 2, 1) === "1",
    ord = "th";
  if (end === "1" && !teen) {
    ord = "st";
  } else if (end === "2" && !teen) {
    ord = "nd";
  } else if (end === "3" && !teen) {
    ord = "rd";
  }
  return ord;
}