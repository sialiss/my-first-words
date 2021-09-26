import Creature from "./creature.js"

export default class Item extends Creature {

    // picture - это ссылка на изображение
    constructor(title, picture) {
        super(title, picture)
    }
}