import Cell from './cell.js'

export default class Field {

    // класс поля, чтобы оно заполнялось тем, чем надо и тогда, когда надо

    constructor(field, filling) {
        this.field = field
        this.filling = filling
        this.fillingCreation()
    }

    fillingCreation() {
        // создание наполнения локации
        
        /* field - это адрес поля в документе
        filling - массив с наполнением для каждой клетки */
        
        /* мне нужно создать массив клеток с айди по номеру в массиве, 
        сделать всех ребёнком поля, заполнить */

        this.cells = []
        for (let i = 0; i < this.filling.length; i++) {
            this.cells[i] = new Cell(this.filling[i], this.field)
        }

    
        
        // ещё нужно будет сделать словарь (или мап) со всеми локациями, добавлять туда созданную локацию
    }

    
}