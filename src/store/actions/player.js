import { FETCH_FIND_PLAYER_SUCCESS, FETCH_PLAYER_ERROR, FETCH_PLAYER_SUCCESS } from "./actionTypes";

export function fetchPlayer() {

    return async dispatch => {

        const kp_id = window.location.pathname.replace("/player/", "");

        const response = await fetch('/Data/films.json')

        if (response.ok) {

            dispatch(fetchPlayerSuccess(response.status))

            const data = await response.json()
            const films = data.movies

            Object.keys(films).forEach((filmNum) => {
                const film = films[filmNum]
                if (film.id_kinopoisk === kp_id) {
                    const data = {
                        title: film.title,
                        id_kinopoisk: film.id_kinopoisk,
                        description: film.description,
                        poster: film.poster,
                        rating_kinopoisk: film.rating_kinopoisk,
                        actors: film.actors,
                        countries: film.countries,
                        generes: film.generes,
                        directors: film.directors,
                        frames: film.frames,

                        activeFrame: film?.frames[0]
                    }

                    dispatch(fetchFindPlayerSuccess(data))
                }
            })
        } else {
            dispatch(fetchPlayerError(response.status))

            console.log("Ошибка HTTP: " + response.status)
        }
    }
}


export function fetchFindPlayerSuccess(data) {
    return {
        type: FETCH_FIND_PLAYER_SUCCESS,
        data
    }
}

export function fetchPlayerSuccess(status) {
    return {
        type: FETCH_PLAYER_SUCCESS,
        status
    }
}

export function fetchPlayerError(e) {
    return {
        type: FETCH_PLAYER_ERROR,
        error: e
    }
}