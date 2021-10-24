import { eventBus } from './eventBus.js'
import Item from './item.js'
import NPC from './NPC.js'

export default class Actions {

    constructor([actDoc, actions], chat) {
        this.actDoc = actDoc
        this.actions = actions
        this.mainWrapNode = document.getElementById("wrapper-with-actions-and-chat")
        this.actMenu = this.mainWrapNode.firstElementChild
        this.chat = chat
        // this.elements = new Set()
        // for (const type in this.actions) {
        //     this.actionAdd(type)
        // }
    }

    interactMenu(object) {

        if (object.menuStatus == 0) {
            // статус меню, чтобы закрывать меню предмета по повторному нажатию (1 - уже открыто, 0 - закрыто)
            object.menuStatus = 1

            this.mainWrapNode = document.getElementById("wrapper-with-actions-and-chat")
            if (this.mainWrapNode.firstElementChild.classList.contains("object-action")) {
                // присвоить прошлому объекту статус меню 0
                this.mainWrapNode.firstElementChild.ownObject.menuStatus = 0
            }
            this.mainWrapNode.firstElementChild.remove()
            // убирает первый элемент (в том числе благодаря этому оно не повторяется)
            
            // создаётся меню действий с предметом
            const actionElement = document.createElement("div")
            actionElement.ownObject = object
            actionElement.classList.add("wrapper")
            actionElement.classList.add("actions")
            actionElement.classList.add("object-action")
            this.mainWrapNode.insertAdjacentElement('afterbegin', actionElement)

            // создание кнопок
            if (object instanceof Item) {
                this.createButton("put item", () => this.putItem(object), actionElement)
            }
            else if (object instanceof NPC) {
                this.createButton("talk", () => this.talk(object), actionElement)
            }
                
        }
        else {
            this.hideMenu(object)
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

    talk(NPC) {
        this.chat.displayText(NPC.title, NPC.speech.greetings)
    }
    
    doSomething() {
        console.log('делаю')
    }
}