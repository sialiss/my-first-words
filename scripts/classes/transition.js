import { eventBus } from "./eventBus.js"

// класс перехода. у него есть следующая локация,
// по нажатию на элемент перехода, он убирает текущую локацию из детей поля, добавляет свою

export default class Transition {
    constructor([text, nextLocation, image ], currentLocationNode) {
        this.text = text
        this.nextLocation = nextLocation
        this.image = image
        this.currentLocationNode = currentLocationNode
        this.transitionCreate()
    }

    transitionCreate() {

        this.transitionElement = document.createElement("div")
        this.transitionElement.classList.add("transition")
        this.currentLocationNode.append(this.transitionElement)

        this.transitionElement.addEventListener("click", () => {
            eventBus.dispatch("transition clicked", this.nextLocation)
            
        }   )
    }
}