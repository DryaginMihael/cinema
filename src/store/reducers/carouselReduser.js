import { FETCH_CAROUSEL_ERROR, FETCH_CAROUSEL_SUCCESS, FETCH_FIND_CAROUSEL_SUCCESS } from "../actions/actionTypes"

const initialState = {
    FilmsCarousel: []
}

export default function carouselReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_CAROUSEL_SUCCESS:
            return { ...state, status: action.status }

        case FETCH_CAROUSEL_ERROR:
            return { ...state, error: action.error }

        case FETCH_FIND_CAROUSEL_SUCCESS:
            return { ...state, FilmsCarousel: action.films }

        default:
            return state
    }
}