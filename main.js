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

const moveMe = document.querySelector('a[href="#and"]')

moveMe.addEventListener("click", movingOn)

function movingOn() {
  moveMe.classList.toggle("translate-me")
}

/*MARK: Development */
const panicMe = document.querySelector('a[href="#development"]')

panicMe.addEventListener("dblclick", panicking)

function panicking() {
  // console.log("panicking")
  panicMe.classList.toggle("shake-me")
}

/*MARK: Sprint 5 */
const colorMe = document.querySelector('a[href="#sprint-5"]')

colorMe.addEventListener("focus", coloring)

function coloring() {
  // console.log("coloring")
  colorMe.classList.add("color-me")
}

/*MARK: Fix */
const mouseMe = document.querySelector('a[href="#fix"]')

mouseMe.addEventListener("mouseover", moveMouse)

function moveMouse(){
  mouseMe.textContent = "Fixed"
}

/*MARK: The */
const rotating = document.querySelector('a[href="#the"]')

rotating.addEventListener("mouseout", rotates)

function rotates(){
  rotating.classList.toggle("the-out")
}

/*MARK: Flow */
const flipping = document.querySelector('a[href="#flow"]')

flipping.addEventListener("mousedown", mouseHold)
flipping.addEventListener("mouseup", mouseRelease)

function mouseHold(){
  flipping.classList.add("flip-me")
  console.log("mouseHold")
}

function mouseRelease(){
  flipping.classList.remove("flip-me")
}

/*MARK: User */
const changedColor = document.querySelector('a[href="#user"]');

document.addEventListener("keyup", function (event) {
  let letter = event.key.toLowerCase();

  changedColor.classList.remove("change-color");

  if (letter === "l") {
    changedColor.classList.add("change-color");
  }
});