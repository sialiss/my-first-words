import Item from './classes/item.js'
import Quest from './classes/quest.js'
import {quests} from './quests.js'

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
    { NPC: [ "Рыбка", 'images/fish.png', { greetings : "Здравствуй, друг мой" }, new Quest(quests.training) ] },
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

export const locations = new Map([ ["берег реки", firstLocation], ["second location", secondLocation] ])
export const startLocation = "берег реки"