import { eventBus } from './eventBus.js'
export default class Inventory {

    constructor([invDoc], items = []) {
        // inventory - ссылка на грид инвентаря
        this.invDoc = invDoc
        this.items = items
        this.elements = new Map()
        for (const item of this.items) {
            this.addItem(item)
        }
    }

    addItem(item) {
        // здесь создаются элементы и картинки для предметов

        const itemImage = document.createElement("image")
        itemImage.classList.add("items-pic")
        itemImage.style.backgroundImage = `url(${item.picture})`
        this.invDoc.append(itemImage)
        this.elements.set(item, itemImage)
        itemImage.addEventListener("click", () => eventBus.dispatch("own item clicked", item))
    }

    removeItem(item) {
        this.elements.get(item).remove()
    }

}