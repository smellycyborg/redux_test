export type Action = {type: "ADD_NOTE", payload: string}

const addNote = (note: string):Action => ({
    type: "ADD_NOTE", payload: note
})