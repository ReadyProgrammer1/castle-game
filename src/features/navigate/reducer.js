
const initialState = {
    position: [100, 100],
    navigateName: 'south',
    walkIndex: 0,
    name: 'phone',
}

const navigateReducer = (state=initialState, action) => {
    //switch(action.type) {
    //    case 'MOVE_PLAYER':
    //        return {
    //            ...action.payload
    //        }
    //    default: return state
    //}
    return state
}

export default navigateReducer