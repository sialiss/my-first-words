// import * as classes from classes.js
import Game from './classes/game.js'
import Item from './classes/item.js'

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
    { items: [new Item("item1", 'images/catcher3.gif')] },
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
    { transition: ["to first location", "берег реки", "images/gamer.gif"]},
]

const locations = new Map([["берег реки", firstLocation], ["second location", secondLocation] ])
const startLocation = "берег реки"

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

// chat
const chatNode = document.getElementById("chat")
const startMessage = "Welcome!"
const chatInfo = [chatNode, startMessage]

const game = new Game(gamerInfo, creaturesInfo, fieldInfo, itemsInfo, invInfo, actInfo, currentLocation, startLocation, chatInfo)
game.start()