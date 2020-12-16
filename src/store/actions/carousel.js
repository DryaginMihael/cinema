import { FETCH_CAROUSEL_ERROR, FETCH_CAROUSEL_SUCCESS, FETCH_FIND_CAROUSEL_SUCCESS } from './actionTypes'

export function drawCarousel(count) {

    return async dispatch => {

        let url = '/Data/films.json'

        const response = await fetch(url)

        if (response.ok) {

            dispatch(fetchCarouselSuccess(response))

            const data = await response.json()
            const films = data.movies

            let arr = []

            const likesFilm = localStorage.getItem('likes')?.split(',');

            let countFilm = 0;

            films.forEach((film, filmNum) => {
                if (film.poster && count > countFilm) {
                    countFilm++
                    arr.push({
                        key: `carousel${filmNum}`,
                        film: film,
                        isLittleIcon: true,
                        like: likesFilm?.includes(film.id_kinopoisk)
                    })
                }
            })

            dispatch(fetchFindCarouselSuccess(arr))

        } else {

            dispatch(fetchCarouselError(response.status))
            console.log("Ошибка HTTP: " + response.status);
        }
    }
}

export function fetchFindCarouselSuccess(films) {
    return {
        type: FETCH_FIND_CAROUSEL_SUCCESS,
        films,
    }
}

export function fetchCarouselSuccess(status) {
    return {
        type: FETCH_CAROUSEL_SUCCESS,
        status
    }
}

export function fetchCarouselError(e) {
    return {
        type: FETCH_CAROUSEL_ERROR,
        error: e
    }
}