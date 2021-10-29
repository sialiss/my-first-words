import { eventBus } from './eventBus.js'

export default class Quest {

    constructor({title, main, availability, next}) {
        this.title = title
        this.main = main //здесь текст и действия по сценам
        this.availability = availability // 0 - нельзя запустить, 1 - можно запустить
        this.next = next
    }

    start() {
        // start = { text : ["text"], act : выбор (говорение)}
        // у выбора должна быть следующая сцена (в зависимости от выбора)
        eventBus.listen("speech listened", (speech) => speech.listened = 1)
        return this.main.start.text
    }

}