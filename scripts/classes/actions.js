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
            this.mainWrapNode.firstElementChild.remove() // убирает первый элемент (в том числе благодаря этому оно не повторяется)
            
            // создаётся меню действий с предметом
            const actionElement = document.createElement("div")
            actionElement.classList.add("wrapper")
            actionElement.classList.add("actions")
            this.mainWrapNode.insertAdjacentElement('afterbegin', actionElement)

            // создание кнопок
            const putItem = document.createElement("button")
            putItem.innerText = "put item"
            actionElement.append(putItem)

            
        }

        else {
            item.menuStatus = 0

            this.mainWrapNode.firstElementChild.remove() // убирает меню
            this.mainWrapNode.insertAdjacentElement('afterbegin', this.actMenu)
        }
    }

    doSomething() {
        console.log('делаю')
    }

    putItem(item) {
        console.log(item)
        eventBus.dispatch("put item", item)
    }
}