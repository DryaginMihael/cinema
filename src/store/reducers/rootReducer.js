import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import filmsReducer from './filmsReducer'
import searchReducer from './searchReducer'
import carouselReducer from './carouselReduser'

export default combineReducers({
    player: playerReducer,
    films: filmsReducer,
    carousel: carouselReducer,
    wideSearch: searchReducer
})