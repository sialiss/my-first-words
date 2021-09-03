// import * as classes from classes.js
import { Game, Creature, Gamer, Field } from './classes.js'

const locations = ["first location", "second location"]
const currentLocation = Array.from(document.querySelectorAll("[location='current-location']"))

// gamer
const gamerPic = "images/gamer.gif"
const gamerInfo = [gamerPic]


// field
const fieldDoc = document.getElementById("field")
// filling = [{items : "[экземпляры класса]", transition = "[что-то]", NPC = "[экземпляры класса]"}] - массив с объектами для каждой клетки
const startFilling = [
    { items: "const item1 = new Item(item1, 'images\gamer.gif')", transition: [], NPC: [] },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
] // cells
const fieldInfo = [fieldDoc, startFilling]

// NPC
const creaturesInfo = []

// items
const itemsInfo = []

function currentLocationChange(nextLocation) {
    for (const location of currentLocation) {
        location.innerText = nextLocation
    }
}

currentLocationChange(locations[0])

const game = new Game(gamerInfo, creaturesInfo, fieldInfo, itemsInfo)