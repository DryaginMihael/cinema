import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import filmsReducer from './filmsReducer'
import searchReducer from './searchReducer'

export default combineReducers({
    player: playerReducer,
    films: filmsReducer,
    wideSearch: searchReducer
})