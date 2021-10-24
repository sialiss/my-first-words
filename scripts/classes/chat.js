export default class Chat {

    constructor(node) {
        this.node = node
    }
    
    displayText(name, text) {
        this.textElement = document.createElement("p")
        this.textElement.classList.add("speech")
        this.textElement.innerText = `${name} : ${text}`

        this.node.insertAdjacentElement('afterbegin', this.textElement)
    }

    talk(options) {

    }

    tutorial(text) {
        this.displayText(text.startText)
    }
}