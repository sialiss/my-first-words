export class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными

    itemsInfo - название, картинка, индекс клетки
    fieldInfo - адрес, массив с наполнением для каждой клетки
    creaturesInfo - 
    gamerInfo - 
    */
    
    constructor(gamerInfo, creaturesInfo, fieldInfo, itemsInfo) {
        this.gamerInfo = gamerInfo
        this.creaturesInfo = creaturesInfo
        this.fieldInfo = fieldInfo
        this.itemsInfo = itemsInfo
        this.start()
    }
    
    start() {
        this.formation()
    }

    formation() {
        const field = new Field(this.fieldInfo[0], this.fieldInfo[1])
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
    constructor(title, picture, startCell) {
        this.title = title
        this.picture = picture
        this.startCell = startCell
    }
}

export class Field {

    // класс поля, чтобы оно заполнялось тем, чем надо и тогда, когда надо

    constructor(field, filling) {
        this.field = field
        this.filling = filling
        this.fillingCreation(this.field, this.filling)
    }

    fillingCreation(field, filling, amount = 25) {

    // создание наполнения локации
    
    /* field - это адрес поля в документе
    filling - массив с наполнением для каждой клетки
    amount - количество клеток, по умолчанию 25 */
    
    /* мне нужно создать массив клеток с айди по номеру в массиве, 
    сделать всех ребёнком поля, заполнить */
    const cells = []
        for (let i = 0; i < amount; i++) {
            cells[i] = new Cell(filling[i], this.field)
        }
        
    // ещё нужно будет сделать словарь (или мап) со всеми локациями, добавлять туда созданную локацию
    }

    
}

export class Cell {

    // создание клетки
    /* клетке передаётся мап с наполнением (массивы)
    в мапе: наполнение (предметы, переход, нпс) */

    // filling = {items : "[экземпляры класса]", transition = "[что-то]", NPC = "[экземпляры класса]"}

    constructor({items, transition, npc}, field) {
        this.items = items
        this.transition = transition
        this.npc = npc
        this.fillingDisplay(field)
    }


    // создавать элементы (картинки) и делать их детьми клетки, 
    // добавлять в один мап все изображения(с ключом в виде экземляра класса),
    // чтобы потом убирать
    fillingDisplay(field) {
        this.cellElement = document.createElement("p")
        this.cellElement.classList.add("cell")
        this.image1 = document.createElement("img")
        this.image1.classList.add("items-img")
        this.image1.src = "images/gamer.gif" //this.items.что-то
        this.cellElement.append(this.image1)
        field.append(this.cellElement)
    }
}