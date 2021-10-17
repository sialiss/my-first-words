import Cell from './cell.js'
import Transition from './transition.js'

// класс локации

export default class Location {

    constructor(name, filling, locations) {
        this.name = name
        this.filling = filling
        this.fillingCreate(locations)
    }

    fillingCreate(locations) {
        // создание элемента локации

        this.locNode = document.createElement("div")
        this.locNode.classList.add("location")
        this.locNode.classList.add("wrapper")


        // создание наполнения локации
        
        /* locNode - это адрес локации в документе
        filling - массив с наполнением для каждой клетки */
        
        /* мне нужно создать массив клеток с айди по номеру в массиве, 
        сделать всех ребёнком локации, заполнить */

        for (let i = 0; i < this.filling.length; i++) {
            
            if (this.filling[i].transition) {
                this.filling[i] = new Transition(this.filling[i].transition, this.locNode)
            }
            else if (this.filling[i].npc) {
                 
            }
            else {
                this.filling[i] = new Cell(this.filling[i].items, this.locNode)
            }
        }
    }
}
