import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import filmsReducer from './filmsReducer'

export default combineReducers({
    player: playerReducer,
    films: filmsReducer
})