import Creature from "./creature.js"
import { eventBus } from './eventBus.js'

export default class Gamer extends Creature {

    // класс для игрока, здесь же будут все его параметры и навыки

    constructor(title, picture, position) {
        super(title, picture)
        this.position = position
    }

    moveToCell(cell) {
        this.position.elementRemove(this)
        cell.elementAdd(this)
        this.position = cell
    }

    takeItem(cell) {
        // если предмет в клетке есть, то взять
        if (cell.items.size != 0) {
            cell.elementRemove(cell.items.values().next().value)
            eventBus.dispatch("item taken", cell.items.values().next().value)
            cell.items.delete(cell.items.values().next().value)
        }
    }
 }