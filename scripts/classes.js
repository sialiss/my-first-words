export class Game {

    /* 
    здесь строится игра:
    в игру передаются всё данные, она создаёт нужные экземпляры классов с нужными данными

    itemsInfo - название, картинка
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

    // надкласс игрока, нпс и предметов
    
    constructor(title, picture, position = undefined) {
        this.title = title
        this.picture = picture
        this.position = position
    }

}

export class NonPlayerCharacter extends Creature {

    // класс для всех созданий (NPC)

    constructor(title, picture) {
        super(title, picture)
    }
}

export class Gamer extends Creature {

    // класс для игрока, здесь же будут все его параметры и навыки

    constructor(title, picture, position = undefined) {
        super(title, picture, position)

    }

 }

export class Item extends Creature {

    // picture - это ссылка на изображение
    constructor(title, picture, position = undefined) {
        super(title, picture, position)
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
        this.cells = []
        for (let i = 0; i < amount; i++) {
            this.cells[i] = new Cell(filling[i], this.field)
        }

    
        
        // ещё нужно будет сделать словарь (или мап) со всеми локациями, добавлять туда созданную локацию
    }

    
}

export class Cell {

    // создание клетки
    /* клетке передаётся мап с наполнением (массивы)
    в мапе: наполнение (предметы, переход, нпс) */
    // filling = {items : "[экземпляры класса]", transition = "[что-то]", NPC = "[экземпляры класса]"}

    constructor({ gamer = null, items = [], transition = [], npc = [] }, field) {
        this.gamer = gamer
        this.items = items
        this.transition = transition
        this.npc = npc
        this.elements = new Map()
        this.fillingDisplay(field)
    }


    // создавать элементы (картинки) и делать их детьми клетки, 
    // добавлять в один мап все изображения(с ключом в виде экземляра класса),
    // чтобы потом убирать

    fillingDisplay(field) {
        this.cellElement = document.createElement("p")
        this.cellElement.classList.add("cell")
        
        if (this.gamer != null) {
            this.elementAdd(this.gamer)
        }

        for (const item of this.items) {
            this.elementAdd(item)
        }

        this.cellElement.addEventListener("click", this.gamerMove)
        field.append(this.cellElement)
    }

    elementAdd(object) {
        
        const image = document.createElement("div")
        image.classList.add("items-pic")
        image.style.backgroundImage = `url(${object.picture})`
        this.cellElement.append(image)
        this.elements.set(object, image)
        object.position = this.cellElement
    }

    elementRemove(object) {

        this.cellElement.get(object).remove()

    }

    gamerMove() {
        console.log(this.gamer.position)
        this.gamer.position.elementRemove(this.gamer)
        this.cellElement.elementAdd(this.gamer)
    }
}