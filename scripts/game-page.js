import Game from './classes/game.js'
import {locations, startLocation} from "./locations.js"

const currentLocation = Array.from(document.querySelectorAll("[location='current-location']"))

// gamer
const gamerPic = "images/gamer.gif"
const gamerName = "YourName"
const gamerInfo = [gamerName, gamerPic]

// field
const fieldDoc = document.getElementById("field")
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
const tutorial = { startText : "Welcome!" }
const chatInfo = [chatNode, tutorial]

// settings
const settingsNode = document.getElementById("settings")
const btnOpen = document.getElementById("settings-btn")
const popUpNode = document.getElementById("pop-up")
const audioNode = document.getElementById("audio")
const audio = { src: "music/bonobo-break-apart-instrumental.mp3", autoplay: 0, volume: 0.5, node : audioNode }
const save = {autosave : 5}
const defaultSet = { audio : audio, save : save }
const settingsInfo = {
    settingsNode: settingsNode, btnOpen: btnOpen,
    popUpNode: popUpNode, defaultSet: defaultSet
}

const game = new Game(gamerInfo, creaturesInfo, fieldInfo, itemsInfo, invInfo, actInfo, currentLocation, startLocation, chatInfo, settingsInfo)
game.start()