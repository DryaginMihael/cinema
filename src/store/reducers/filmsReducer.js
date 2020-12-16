import { FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS, FETCH_FIND_FILMS_SUCCESS } from "../actions/actionTypes"

const initialState = {
    FilmsList: []
}

export default function filmsReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_FILMS_SUCCESS:
            return { ...state, status: action.status }

        case FETCH_FILMS_ERROR:
            return { ...state, error: action.error }

        case FETCH_FIND_FILMS_SUCCESS:
            return { ...state, FilmsList: action.films, isEnd: action.isEnd, randomId: action.randomId }

        default:
            return state
    }
}