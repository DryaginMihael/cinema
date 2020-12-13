import { RESET_WIDE_SEARCH, WIDE_SEARCH } from "./actionTypes";

export function setFormState(FormState) {
    return dispatch => {
        dispatch({ type: WIDE_SEARCH, searchSetting: FormState });
    }
}

export function resetFormState() {
    return dispatch => {
        dispatch({ type: RESET_WIDE_SEARCH })
    }
}