import Location from './location.js'
import { eventBus } from "./eventBus.js"

export default class Field {

    // класс поля, чтобы оно заполнялось тем, чем надо и тогда, когда надо

    constructor(fieldNode, locations, startLocation) {
        this.fieldNode = fieldNode
        this.locations = locations
        this.currentLocation = startLocation
        this.locationsCreate()
    }

    locationsCreate() {
        // locationsInfo = {"first location" : firstLocation, "second location" : secondLocation}

        for (let locationName of this.locations.keys()) {
            // заменить информацию про локацию на объект локации
            this.locations.set(locationName, new Location(locationName, this.locations.get(locationName)))
        }

        // сделать первую локацию ребёнком поля
        this.currentLocation = this.locations.get(this.currentLocation)
        this.fieldNode.append(this.currentLocation.locNode)
    }

    locationChange(nextLocation) {
        this.currentLocation.locNode.remove()
        this.fieldNode.append(this.locations.get(nextLocation).locNode)
        this.currentLocation = this.locations.get(nextLocation)
        eventBus.dispatch("location changed", this.currentLocation.filling[0])
    }
}