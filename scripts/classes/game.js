import Gamer from './gamer.js'
import Field from './field.js'
import NonPlayerCharacter from './NPC.js'
import { eventBus } from './eventBus.js'
import Inventory from './inventory.js'
import Actions from './actions.js'
import Chat from './chat.js'
import Settings from './settings.js'
import Fight from './fight.js'

export default class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными

    itemsInfo - название, картинка
    fieldInfo - адрес, массив с наполнением для каждой клетки
    creaturesInfo - 
    gamerInfo - [gamerPic, gamerName]
    */
    
    constructor(gamerInfo, creaturesInfo, fieldInfo, itemsInfo, invInfo, actInfo, currentLocation, startLocation,
        chatInfo, settingsInfo, fightInfo) {
        this.gamerInfo = gamerInfo
        this.creaturesInfo = creaturesInfo
        this.fieldInfo = fieldInfo
        this.itemsInfo = itemsInfo
        this.invInfo = invInfo
        this.actInfo = actInfo
        this.chatInfo = chatInfo
        this.currentLocation = currentLocation
        this.settingsInfo = settingsInfo
        this.fightInfo = fightInfo
        this.locationNameChange(this.currentLocation, startLocation)
    }
    
    start() {
        // создание всего

        this.fieldCreate()
        this.inventoryCreate()
        this.chatCreate()
        this.actionsCreate()
        this.fightCreate()
        this.settingsTune()
        this.gamerCreate(this.gamerInfo, this.inventory)
    }

    fieldCreate() {
        // создание поля
        this.field = new Field(this.fieldInfo[0], this.fieldInfo[1], this.fieldInfo[2])
        eventBus.listen("transition clicked", (nextLocation) => this.field.locationChange(nextLocation))
    }

    actionsCreate() {
        // создание действий
        this.actions = new Actions(this.actInfo, this.chat)
        eventBus.listen("own item clicked", (item) => this.actions.interactMenu(item))
        eventBus.listen("NPC clicked", (NPC) => this.actions.interactMenu(NPC))
    }

    inventoryCreate() {
        // создание инвентаря
        this.inventory = new Inventory(this.invInfo)
        eventBus.listen("item taken", (item) => this.inventory.addItem(item))
        eventBus.listen("remove item from inventory", (item) => this.inventory.removeItem(item))
    }

    chatCreate() {
        this.chat = new Chat(this.chatInfo[0])
    }

    gamerCreate([gamerName, gamerPic]) {
        // создание игрока
        this.gamer = new Gamer(gamerName, gamerPic, this.field.currentLocation.filling[0])
        this.gamer.position.elementAdd(this.gamer)
        eventBus.listen("cell clicked", (cell) => this.gamer.moveToCell(cell))
        eventBus.listen("cell clicked", (cell) => this.gamer.takeItem(cell))
        eventBus.listen("put item", (item) => this.gamer.putItem(item))
        eventBus.listen("location changed", (newPosition) => this.gamer.moveToCell(newPosition))
    }

    fightCreate() {
        this.fight = new Fight(this.fightInfo)
    }

    settingsTune() {
        this.settings = new Settings(this.settingsInfo)
    }

    locationNameChange(currentLocation, nextLocation) {
        for (const location of currentLocation) {
            location.innerText = nextLocation
        }
    }
}