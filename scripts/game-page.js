// import * as classes from classes.js
import Game from './classes/game.js'
import Item from './classes/item.js'
import Transition from './classes/transition.js'

const currentLocation = Array.from(document.querySelectorAll("[location='current-location']"))

// gamer
const gamerPic = "images/gamer.gif"
let gamerName = "YourName"
const gamerInfo = [gamerName, gamerPic]

// field
const fieldDoc = document.getElementById("field")
/* filling = [{items : "[экземпляры класса]", transition: "[что-то]", 
NPC : "[экземпляры класса]"}] - массив с объектами для каждой клетки */

const firstLocation = [
    { items: [new Item("item1", 'images/catcher3.gif')]},
    { items: [new Item("item3", 'images/catcher3.gif'), new Item("item4", 'images/catcher3.gif')] },
    { items: [new Item("item5", 'images/catcher3.gif'), new Item("item6", 'images/catcher3.gif'), new Item("item7", 'images/catcher3.gif')] },
    {items: [new Item("item8", 'images/catcher3.gif'), new Item("item9", 'images/catcher3.gif'), new Item("item10", 'images/catcher3.gif'),
        new Item("item11", 'images/catcher3.gif')]
    },
    { items: [new Item("item12", 'images/catcher3.gif'), new Item("item13", 'images/catcher3.gif'), new Item("item14", 'images/catcher3.gif'),
        new Item("item15", 'images/catcher3.gif'), new Item("item16", 'images/catcher3.gif')]
    },
    { items: [new Item("item17", 'images/catcher3.gif'), new Item("item18", 'images/catcher3.gif'), new Item("item19", 'images/catcher3.gif'),
        new Item("item20", 'images/catcher3.gif'), new Item("item21", 'images/catcher3.gif'), new Item("item22", 'images/catcher3.gif')] },
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
    { transition: ["to second location", "second location", "images/gamer.gif"] }
]
const secondLocation = [
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
    { },
    { },
    { },
    { },
    { },
    { },
    { transition: ["to first location", "first location", "images/gamer.gif"]},
]

const locations = new Map([ ["first location", firstLocation], ["second location", secondLocation] ])
const startLocation = "first location"

const fieldInfo = [fieldDoc, locations, startLocation]

// NPC
const creaturesInfo = []

// items
const itemsInfo = []

// inventory
const invDoc = document.getElementById("inventory")
const invInfo = [invDoc]

// actions
const actDoc = document.getElementById("actions")
const actions = []
const actInfo = [actDoc, actions]

const game = new Game(gamerInfo, creaturesInfo, fieldInfo, itemsInfo, invInfo, actInfo, currentLocation, startLocation)
game.start()