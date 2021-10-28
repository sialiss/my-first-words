const training = {
    start: {
        text: ["приветик", "потренируемся?"],
        action: [],
    },

    if_yes: {
        text: ["ура, начинай тренировку!"],
        action: [],
    },

    if_no: {
        text: ["эхх, хорошо, приходи, когда захочешь потренироваться.."],
    },

    training: {
        text: ["удачи!"],
    },

    after_training: {
        text: ["спасибо! 💕"],
        action: [],
    },
    
}

const france = {

}

export const quests = {
    training: { title: "training", main: training, availability: 1, next: "quests.france.availability" },
    france : { title: "France", main: france, availability : 0}
}