// import * as classes from classes.js
import { Game, Creature, Gamer, Field } from './classes.js'

const locations = ["first location", "second location"]
const currentLocation = Array.from(document.querySelectorAll("[location='current-location']"))
const fieldDoc = document.getElementById("field")
const startFilling = ("<p style='box-shadow: 0px 0px 0px 1px lightblue'>пусто</p>").repeat(25)

function currentLocationChange(nextLocation) {
    for (const location of currentLocation) {
        location.innerText = nextLocation
    }
}

currentLocationChange(locations[0])

const field = new Field(fieldDoc, startFilling)