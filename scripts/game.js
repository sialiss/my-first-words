let locations = ["first location", "second location"]
const currentLocation = Array.from(document.querySelectorAll("[location='current-location']"))
const field = document.getElementById("field")

function currentLocationChange(nextLocation) {
    for (const location of currentLocation) {
        location.innerText = nextLocation
    }
}

currentLocationChange(locations[0])
field.innerHTML = ("<p style='box-shadow: 0px 0px 0px 1px lightblue'>клетка</p>").repeat(25)