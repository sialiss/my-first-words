export default class Chat {

    constructor(node) {
        this.node = node
    }
    
    displayText(text) {
        this.textElement = document.createElement("p")
        this.textElement.innerText = text

        this.node.insertAdjacentElement('afterbegin', this.textElement)
    }

    talk(options) {

    }

    tutorial(text) {
        this.displayText(text.startText)
    }
}