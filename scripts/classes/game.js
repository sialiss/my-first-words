import Gamer from './gamer.js'
import Field from './field.js'
import NonPlayerCharacter from './NPC.js'
import { eventBus } from './eventBus.js'
import Inventory from './inventory.js'

export default class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными

    itemsInfo - название, картинка
    fieldInfo - адрес, массив с наполнением для каждой клетки
    creaturesInfo - 
    gamerInfo - [gamerPic, gamerName]
    */
    
    constructor(gamerInfo, creaturesInfo, fieldInfo, itemsInfo, invInfo) {
        this.gamerInfo = gamerInfo
        this.creaturesInfo = creaturesInfo
        this.fieldInfo = fieldInfo
        this.itemsInfo = itemsInfo
        this.invInfo = invInfo
    }
    
    start() {
        // создание всего

        this.formation()
        this.gamerCreate(this.gamerInfo)
        this.inventoryCreate()
    }

    formation() {
        // создание поля
        this.field = new Field(this.fieldInfo[0], this.fieldInfo[1])
    }

    inventoryCreate() {
        // создание инвентаря
        this.inventory = new Inventory(this.invInfo)
        eventBus.listen("item taken", (item) => this.inventory.addItem(item))
    }

    gamerCreate([gamerName, gamerPic]) {
        // создание игрока
        this.gamer = new Gamer(gamerName, gamerPic, this.field.cells[0])
        this.gamer.position.elementAdd(this.gamer)
        eventBus.listen("cell clicked", (cell) => this.gamer.moveToCell(cell))
        eventBus.listen("cell clicked", (cell) => this.gamer.takeItem(cell))
    }
}