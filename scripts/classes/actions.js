export default class Actions {

    constructor([actDoc, actions]) {
        this.actDoc = actDoc
        this.actions = actions
        this.elements = new Set()
        for (const type in this.actions) {
            this.actionAdd(type)
        }
    }

    putItem(item) {
        const actionElement = document.createElement("p")
        actionElement.classList.add("act-btn")
        actionElement.innerText = "put the item"
        this.actDoc.append(actionElement)
        actionElement.addEventListener("click", this.doSomething)
    }

    doSomething() {
        console.log('делаю')
    }
}