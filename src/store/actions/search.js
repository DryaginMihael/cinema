import { WIDE_SEARCH } from "./actionTypes";

export function setFormState(FormState) {
    return dispatch => {
        dispatch({ type: WIDE_SEARCH, searchSetting: FormState });
    }
}