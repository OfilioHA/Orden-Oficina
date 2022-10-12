import { atom } from "recoil";

export const taskPersonStore = atom({
    key: 'taskPerson',
    default: null
})

export const taskInfoStore = atom({
    key: 'taskInfo',
    default: {
        task: null,
        round: {
            actual: null,
            last: null
        }
    }
})