export default class Settings {

    // const audio = { src: "music/bonobo-break-apart-instrumental.mp3", autoplay: 0, volume: 50, node : audioNode }
    // const save = {autosave : 5}
    // const defaultSet = {audio : audio, save : save}
    // const settingsInfo = {settingsNode : settingsNode, settingsBtn = settingsBtn, popUpNode = popUpNode, defaultSet = defaultSet}
    
    constructor(settingsInfo) {

        this.defaultSet = settingsInfo.defaultSet
        this.currentSet = this.defaultSet
        this.settingsNode = settingsInfo.settingsNode
        this.popUpNode = settingsInfo.popUpNode
        this.btnOpen = settingsInfo.btnOpen
        this.audio = this.currentSet.audio
        
        this.manageSettings()
    }

    manageSettings() {
        this.btnClose = document.createElement("button")
        this.btnClose.innerText = "закрыть настройки"
        this.btnClose.addEventListener("click", () => this.closeSettings())

        this.btnSettingsToDefault = document.createElement("button")
        this.btnSettingsToDefault.innerText = "сбросить настройки"
        this.btnSettingsToDefault.addEventListener("click", this.settingsToDefault)

        this.btnOpen.addEventListener("click", () => this.openSettings())

        this.settingsNode.append(this.btnClose)
        this.settingsNode.append(this.btnSettingsToDefault)
    }

    closeSettings() {
        this.popUpNode.classList.add("hidden")
    }

    openSettings() {
        this.popUpNode.classList.remove("hidden")
    }

    settingsToDefault() {
        this.currentSet = this.defaultSet
    }
}