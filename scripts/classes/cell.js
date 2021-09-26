import { eventBus } from "./eventBus.js"

export default class Cell {

    // создание клетки
    /* клетке передаётся мап с наполнением (массивы)
    в мапе: наполнение (предметы, переход, нпс) */
    // filling = {items : "[экземпляры класса]", transition = "[что-то]", NPC = "[экземпляры класса]"}

    constructor({ items = [], transition = [], npc = [] }, field) {
        this.items = items
        this.transition = transition
        this.npc = npc
        this.elements = new Map()
        this.fillingDisplay(field)
    }

    fillingDisplay(field) {
        // здесь создаются элементы (клетки) для объектов
        this.cellElement = document.createElement("p")
        this.cellElement.classList.add("cell")

        for (const item of this.items) {
            this.elementAdd(item) // для каждого предмета выполняется функция добавления (размещения)
        }
        this.cellElement.addEventListener("click", () => {
            eventBus.dispatch("cell clicked", this)
            
        }   )

        field.append(this.cellElement)
    }

    elementAdd(object) {
        // здесь создаётся картинка объекта
        const image = document.createElement("div")
        image.classList.add("items-pic")
        image.style.backgroundImage = `url(${object.picture})`
        this.cellElement.insertAdjacentElement('afterbegin', image)
        this.elements.set(object, image) //картинка добавляется в мап с изображениями, экземпляр класса её ключ 
    }

    elementRemove(object) {
        // здесь картинка объекта убирается из клетки (мапа с изображениями)
        this.elements.get(object).remove()
    }
}