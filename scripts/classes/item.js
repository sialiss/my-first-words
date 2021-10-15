import Creature from "./creature.js"

export default class Item extends Creature {

    // picture - это ссылка на изображение
    constructor(title, picture) {
        super(title, picture)

        // статус меню, чтобы закрывать меню предмета по повторному нажатию (1 - уже открыто, 0 - закрыто)
        this.menuStatus = 0
    }
}