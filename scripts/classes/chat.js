import { eventBus } from "./eventBus.js"

export default class Chat {

    constructor(node) {
        this.node = node
    }
    
    displayText(name, speech) {
        if (speech.listened) {
            this.textElement = document.createElement("p")
            this.textElement.classList.add("speech")
            this.textElement.innerText = `${name} : ${speech[speech.length-1]}`
            this.node.insertAdjacentElement('afterbegin', this.textElement)
        }
        else {
            for (let phrase of speech) {
                
                this.textElement = document.createElement("p")
                this.textElement.classList.add("speech")
                this.textElement.innerText = `${name} : ${phrase}`
                this.node.insertAdjacentElement('afterbegin', this.textElement)
                eventBus.dispatch("speech listened", speech)
            }
        }
    }

    talk(options) {

    }

    tutorial(text) {
        this.displayText(text.startText)
    }
}