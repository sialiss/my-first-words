import Creature from "./creature.js"

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
 }