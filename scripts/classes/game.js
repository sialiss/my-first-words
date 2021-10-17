import Gamer from './gamer.js'
import Field from './field.js'
import NonPlayerCharacter from './NPC.js'
import { eventBus } from './eventBus.js'
import Inventory from './inventory.js'
import Actions from './actions.js'

export default class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными

    itemsInfo - название, картинка
    fieldInfo - адрес, массив с наполнением для каждой клетки
    creaturesInfo - 
    gamerInfo - [gamerPic, gamerName]
    */
    
    constructor(gamerInfo, creaturesInfo, fieldInfo, itemsInfo, invInfo, ActInfo, currentLocation, startLocation) {
        this.gamerInfo = gamerInfo
        this.creaturesInfo = creaturesInfo
        this.fieldInfo = fieldInfo
        this.itemsInfo = itemsInfo
        this.invInfo = invInfo
        this.ActInfo = ActInfo
        this.currentLocation = currentLocation
        this.locationNameChange(this.currentLocation, startLocation)
    }
    
    start() {
        // создание всего

        this.fieldCreate()
        this.gamerCreate(this.gamerInfo)
        this.inventoryCreate()
        this.actionsCreate()
    }

    fieldCreate() {
        // создание поля
        this.field = new Field(this.fieldInfo[0], this.fieldInfo[1], this.fieldInfo[2])
        eventBus.listen("transition clicked", (nextLocation) => this.field.locationChange(nextLocation))
    }

    actionsCreate() {
        // создание действий
        this.actions = new Actions(this.ActInfo)
        eventBus.listen("own item clicked", (item) => this.actions.interactItemMenu(item))
    }

    inventoryCreate() {
        // создание инвентаря
        this.inventory = new Inventory(this.invInfo)
        eventBus.listen("item taken", (item) => this.inventory.addItem(item))
        eventBus.listen("remove item from inventory", (item) => this.inventory.removeItem(item))
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

    locationNameChange(currentLocation, nextLocation) {
        for (const location of currentLocation) {
            location.innerText = nextLocation
        }
    }
}