import Creature from "./creature.js"
import { eventBus } from "./eventBus.js"

export default class NPC extends Creature {

    // класс для всех созданий (NPC)

    constructor( [title, picture, speech], locNode) {
        super(title, picture)
        this.locNode = locNode
        this.speech = speech
        this.menuStatus = 0
        // this.questStatus = 
        this.createNPC()
    }

    createNPC() {

        this.NPCelement = document.createElement("div")
        this.NPCelement.classList.add("NPC")
        this.NPCelement.style.backgroundImage = `url(${this.picture})`
        this.locNode.append(this.NPCelement)

        this.NPCelement.addEventListener("click", () => {
            eventBus.dispatch("NPC clicked", this)
        }   )
    }
}