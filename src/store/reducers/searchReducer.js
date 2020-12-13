import { RESET_WIDE_SEARCH, WIDE_SEARCH } from "../actions/actionTypes";

const initialState = {
    search: false,
    films: true,
    mult: false,
    serials: false,
    anime: false,
    year: "year",
    genr: "genr",
    country: "country",
    quality: "quality",
    kp: "7",
    imdb: "7",
    char: "",
    activeChar: null
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case WIDE_SEARCH:
            return { ...state, ...action.searchSetting };
        case RESET_WIDE_SEARCH:
            return { ...initialState };
        default:
            return state;
    }
}