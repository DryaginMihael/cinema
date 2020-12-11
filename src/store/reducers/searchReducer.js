import { WIDE_SEARCH } from "../actions/actionTypes";

const initialState = {
    search: false,
    films: "off",
    mult: "off",
    serials: "off",
    anime: "off",
    year: "",
    genr: "",
    country: "",
    quality: "",
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case WIDE_SEARCH:
            return { ...state, ...action.searchSetting };
        default:
            return state;
    }
}