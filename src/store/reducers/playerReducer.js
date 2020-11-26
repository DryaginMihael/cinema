import { FETCH_FIND_PLAYER_SUCCESS, FETCH_PLAYER_ERROR, FETCH_PLAYER_SUCCESS } from "../actions/actionTypes"

const initialState = {
    title: "",
    id_kinopoisk: null,
    description: "",
    poster: "",
    directors: [],
    actors: [],
    countries: [],
    generes: [],

    frames: [],
    activeFrame: "",

    rating_kinopoisk: null,
    comments: [
        {
            author: "Lorem ipsum",
            img: "",
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptate placeat
            aspernatur, minima dicta debitis optio, excepturi iure itaque eveniet commodi neque
            accusamus corrupti? Aspernatur maxime accusamus optio amet voluptate.`
        }
    ],
    currentUser: {
        author: "Lorem ipsum",
        img: ""
    },
}

export default function playerReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_PLAYER_SUCCESS:
            return { ...state, }

        case FETCH_PLAYER_ERROR:
            return { ...state, error: action.error }

        case FETCH_FIND_PLAYER_SUCCESS:
            return { ...state, ...action.data }

        default: return state
    }
}