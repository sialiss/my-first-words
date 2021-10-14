import { eventBus } from './eventBus.js'

export default class Actions {

    constructor([actDoc, actions]) {
        this.actDoc = actDoc
        this.actions = actions
        this.mainWrapNode = document.getElementById("wrapper-with-actions-and-chat")
        this.actMenu = this.mainWrapNode.firstElementChild
        // this.elements = new Set()
        // for (const type in this.actions) {
        //     this.actionAdd(type)
        // }
    }

    interactItemMenu(item) {
        if (item.menuStatus == 0) {
            // статус меню, чтобы закрывать меню предмета по повторному нажатию (1 - уже открыто, 0 - закрыто)
            item.menuStatus = 1

            this.mainWrapNode = document.getElementById("wrapper-with-actions-and-chat")
            if (this.mainWrapNode.firstElementChild.classList.contains("itemAction")) {
                // присвоить прошлому предмету статус меню 0
                this.mainWrapNode.firstElementChild.ownItem.menuStatus = 0
            }
            this.mainWrapNode.firstElementChild.remove() // убирает первый элемент (в том числе благодаря этому оно не повторяется)
            
            // создаётся меню действий с предметом
            const actionElement = document.createElement("div")
            actionElement.ownItem = item
            actionElement.classList.add("wrapper")
            actionElement.classList.add("actions")
            actionElement.classList.add("itemAction")
            this.mainWrapNode.insertAdjacentElement('afterbegin', actionElement)

            // создание кнопок
            this.createButton("put item", () => this.putItem(item), actionElement)
        }

        else {
            this.hideMenu(item)
        }
    }

    createButton(name, func, parent) {
        const btn = document.createElement("button")
        btn.innerText = name
        parent.append(btn)

        btn.addEventListener("click", func) // тут действие по клику
    }

    hideMenu(item) {
        item.menuStatus = 0

        this.mainWrapNode.firstElementChild.remove() // убирает меню
        this.mainWrapNode.insertAdjacentElement('afterbegin', this.actMenu) // возвращает меню для общих действий
    }

    putItem(item) {
        this.hideMenu(item)
        eventBus.dispatch("put item", item)
    }
    
    doSomething() {
        console.log('делаю')
    }
}