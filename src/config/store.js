import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import worldReducer from '../features/world/reducer'
import navigateReducer from '../features/navigate/reducer'

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    navigate: navigateReducer,
    world: worldReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store