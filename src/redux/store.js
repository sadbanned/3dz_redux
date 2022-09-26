import { combineReducers } from "redux";
import { createUserReducer } from "./createUserReduser";
import { clearText } from './clearText'

export const rootReducer = combineReducers({
    users: createUserReducer,
    clear: clearText,
})

export const  createUserAction = (user) => {
    return {
        type: types.CREATE_USER,
        payload: user
    }
}