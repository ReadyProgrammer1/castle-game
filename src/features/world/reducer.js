
const initialState = {
    castleWorld: 'false',
}


const worldReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'WORLD_RENDER':
            return {
                ...action.payload
            }
        default: return state
    }
}

export default worldReducer