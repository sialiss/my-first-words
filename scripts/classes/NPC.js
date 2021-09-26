import Creature from "./creature.js"

export default class NonPlayerCharacter extends Creature {

    // класс для всех созданий (NPC)

    constructor(title, picture) {
        super(title, picture)
    }
}