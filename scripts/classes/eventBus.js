class EventBus {
    // отправляет события наверх

    constructor() {
        this.listeners = new Map()
    }

    listen(type, listener) {
        if (this.listeners.has(type)) {
            this.listeners.get(type).add(listener)
        }
        else {
            this.listeners.set(type, new Set([listener]))
        }
    }

    unlisten(type, listener) {
        this.listeners.get(type)?.delete(listener)
    }
    
    dispatch(type, data) {
        const listenersOfType = this.listeners.get(type)
        for (const listener of listenersOfType) {
            listener(data)
        }
    }
}

export const eventBus = new EventBus()