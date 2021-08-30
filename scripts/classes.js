export class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными
    */
    
    constructor(gamerInfo, creaturesInfo, fieldInfo) {
        this.gamerInfo = gamerInfo
        this.creaturesInfo = creaturesInfo
        this.fieldInfo = fieldInfo
    }
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

export class Item {

    // picture - это ссылка на изображение
    constructor(title, picture) {
        this.title = title
        this.picture = picture
    }
}

export class Field {

    // класс поля, чтобы оно заполнялось тем, чем надо и тогда, когда надо

    constructor(field, filling) {
        this.field = field
        this.filling = filling
        this.fillingCreation(this.field, this.filling)
    }

    fillingCreation(field, newFilling, amount = 25) {

    // создание наполнения локации
    
    /* field - это адрес поля в документе
    newFilling - массив с наполнением для каждой клетки
    amount - количество клеток, по умолчанию 25 */
    
    /* мне нужно создать массив клеток с айди по номеру в массиве, 
    сделать всех ребёнком поля, заполнить */
        
        for (i = 0; i < amount; i++) {
            cells[i] = new Cell(newFilling[i])
            field.append(cells[i])
        }
        
    // ещё нужно будет сделать словарь (или мап) со всеми локациями, добавлять туда созданную локацию
    }

    
}

export class Cell {

    // создание клетки
    /* клетке передаётся мап с наполнением (массивы)
    в мапе: наполнение (предметы, переход, нпс) */

    // filling = {items : "[экземпляры класса]", transition = "[что-то]", NPC = "[экземпляры класса]"}

    constructor({items, transition, npc}) {
        this.items = items
        this.transition = transition
        this.npc = npc
    }


    // создавать элементы (картинки) и делать их детьми клетки, 
    // добавлять в один мап все изображения(с ключом в виде экземляра класса),
    // чтобы потом убирать
    fillingDisplay() {
        image = document.createElement("img")
        image.src = "cjvkgifohidigk"
        this.element.append(image)


    }
}