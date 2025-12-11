/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)



// MARK: Frontend
// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...
const largeMeButton = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
// scaleLink.addEventListener...
largeMeButton.addEventListener("click", toggleSize)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

function toggleSize() {
  largeMeButton.classList.toggle("enlarge-me")
  
}

largeMeButton.addEventListener("animationend", toggleSize)

/*MARK: & */

// Stap 1: querySelector
const moveMe = document.querySelector('a[href="#and"]')

// Stap 2: addEventListener
moveMe.addEventListener("click", movingOn)

// Stap 3: (Callback functie met) classList (.toggle())
function movingOn() {
  moveMe.classList.toggle("translate-me")
}

/*MARK: Development */

// Stap 1: querySelector
const panicMe = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
panicMe.addEventListener("dblclick", panicking)

// Stap 3: (Callback functie met) classList (.toggle())
function panicking() {
  // console.log("panicking")
  panicMe.classList.toggle("shake-me")
}

/*MARK: Sprint 5 */

// Stap 1: querySelector
const colorMe = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener
colorMe.addEventListener("focus", coloring)

// Stap 3: (Callback functie met) classList (.add())
function coloring() {
  // console.log("coloring")
  colorMe.classList.add("color-me")
}

/*MARK: Fix */

// Stap 1: querySelector
const mouseMe = document.querySelector('a[href="#fix"]')

// Stap 2: addEventListener
mouseMe.addEventListener("mouseover", moveMouse)

// Stap 3: (Callback functie met) textContect
function moveMouse(){
  mouseMe.textContent = "Fixed"
}

/*MARK: The */

// Stap 1: querySelector
const rotating = document.querySelector('a[href="#the"]')

// Stap 2: addEventListener
rotating.addEventListener("mouseout", rotates)

// Stap 3: (Callback functie met) classList (.toggle())
 function rotates(){
  rotating.classList.toggle("the-out")
}

/*MARK: Flow */

// Stap 1: querySelector
const flipping = document.querySelector('a[href="#flow"]')

// Stap 2: addEventListener
flipping.addEventListener("mousedown", mouseHold)
flipping.addEventListener("mouseup", mouseRelease)

// Stap 3: (Callback functie met) classList (.add())
function mouseHold(){
  flipping.classList.add("flip-me")
  console.log("mouseHold")
}
// Stap 4: (Callback functie met) classList (.remove())
function mouseRelease(){
  flipping.classList.remove("flip-me")
}

/*MARK: User */

// Stap 1: querySelector
const changedColor = document.querySelector('a[href="#user"]');

// Stap 2: addEventListener
document.addEventListener("keyup", function (event) {
  let letter = event.key.toLowerCase();

  // Stap 3: (Callback functie met) classList (.remove())
  changedColor.classList.remove("change-color");

  if (letter === "l") {
    // Stap 4: (Callback functie met) classList (.add())
    changedColor.classList.add("change-color");
  }
});

/*MARK: Interface */

// Stap 1: querySelector
const blowUp = document.querySelector('a[href="#interface"]');
// Stap 2: addEventListener
document.addEventListener("keydown", function(event) {
  // Stap 3: (Callback functie met) classList (.add())
  if (event.key === "b") {
    blowUp.classList.add("blow")
    console.log("test");
    
  }
})
// Stap 4: addEventListener
document.addEventListener("keyup", function(event){
  if (event.key === "b") {
    // Stap 5: (Callback functie met) classList (.remove())
    blowUp.classList.remove("blow")
    console.log("test1")
  }
})