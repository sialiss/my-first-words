export class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными

    */
    // constructor()
}

export class Creature {

    // класс для всех созданий (NPC)
    
    constructor(title, name, appearance) {
        this.title = title
        this.name = name
        this.appearance = appearance
    }

}

export class Gamer extends Creature {

    // класс для игрока, здесь же будут все его параметры и навыки

    constructor(title, name, appearance) {
        super(title, name, appearance)
    }
}

export class Field {

    // класс поля, чтобы оно заполнялось тем, чем надо и тогда, когда надо

    constructor(field, filling) {
        this.field = field
        this.filling = filling
        this.fillingChange(this.field, this.filling)
    }

    fillingChange(field, newFilling) {
        field.innerHTML = newFilling
    }
}