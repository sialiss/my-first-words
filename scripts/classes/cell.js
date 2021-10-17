import { eventBus } from "./eventBus.js"

export default class Cell {

    // создание клетки
    /* клетке передаётся мап с наполнением (массивы)
    в мапе: наполнение (предметы, переход, нпс) */
    // filling = {items : "[экземпляры класса]", transition = "[что-то]", NPC = "[экземпляры класса]"}

    constructor(items = new Set(), locDoc) {
        this.items = new Set(items)
        this.elements = new Map()
        this.fillingDisplay(locDoc)
    }

    fillingDisplay(locDoc) {
        // здесь создаются элементы (клетки) для объектов
        this.cellElement = document.createElement("p")
        this.cellElement.classList.add("cell")

        for (const item of this.items) {
            this.elementAdd(item) // для каждого предмета выполняется функция добавления (размещения)
        }

        this.cellElement.addEventListener("click", () => {
            eventBus.dispatch("cell clicked", this)
            
        }   )

        locDoc.append(this.cellElement)
    }

    elementAdd(object, position = 'afterbegin') {
        // здесь создаётся картинка объекта
        const image = document.createElement("div")
        image.classList.add("items-pic")
        image.style.backgroundImage = `url(${object.picture})`
        this.cellElement.insertAdjacentElement(position, image)
        this.elements.set(object, image) // картинка добавляется в мап с изображениями, экземпляр класса её ключ
        if (object.constructor.name == "Item") {
            this.items.add(object)
        }
    }

    elementRemove(object) {
        // здесь картинка объекта убирается из клетки (мапа с изображениями)
        this.elements.get(object).remove()
    }
}