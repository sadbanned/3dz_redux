import {types} from "../types"


export const clearTextAction = (clear) => {
    return {
        type: types.Clear_Text,
        payload: clear
    }
}