// import * as classes from classes.js
import Game from './classes/game.js'
import Item from './classes/item.js'

const locations = ["first location", "second location"]
const currentLocation = Array.from(document.querySelectorAll("[location='current-location']"))

// gamer
const gamerPic = "images/gamer.gif"
let gamerName = "YourName"
const gamerInfo = [gamerName, gamerPic]

// field
const fieldDoc = document.getElementById("field")
/* filling = [{items : "[экземпляры класса]", transition: "[что-то]", 
NPC : "[экземпляры класса]"}] - массив с объектами для каждой клетки */
const startFilling = [
    { items: [new Item("item1", 'images/catcher3.gif')], transition: [], NPC: [] },
    { items: [new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif')] },
    { items: [new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif')] },
    {items: [new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'),
        new Item("item1", 'images/catcher3.gif')]
    },
    { items: [new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'),
        new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif')]
    },
    { items: [new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'),
        new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif'), new Item("item1", 'images/catcher3.gif')] },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { }
]

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
game.start()