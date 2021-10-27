export default class Quest {

    constructor(title, text, availability) {
        this.title = title
        this.text = text
        this.availability = availability // 0 - нельзя запустить, 1 - можно запустить
    }
}