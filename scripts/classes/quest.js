export default class Quest {

    constructor(title, text, availability, status) {
        this.title = title
        this.text = text
        this.availability = availability // 0 - нельзя запустить, 1 - можно запустить
        this.status = status // 0 - не начат или завершён, 1 - в процессе
    }
}