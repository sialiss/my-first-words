export default class Fight {

    constructor([fightNode]) {
        this.node = fightNode
        this.createMenu()
    }

    createMenu() {
        // количество столбцов в гриде, чтобы заполнить первую строку пустыми элементами
        const column = console.log(getComputedStyle(this.node).gridTemplateColumns.split(' ').length)

        for (let i = 0; i < column; i++) {
            document.createElement("div")
            
        }
    }

    letsFight(gamer, NPC) {
        
    }
}