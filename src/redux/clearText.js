const initialState = {
    title: ""
}


export const titleReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.Say_Hello:
            return{...state, title:action.payload}
        case types.Clear_Text:
            return{...state, title: ""}
            default:
                return state
    }
}