import React from 'react'
import FilmItem from '../../containers/Main/Films/FilmItem/FilmItem'
import { FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS, FETCH_FIND_FILMS_SUCCESS } from './actionTypes'

export function drawFilms(isLittleIcon, count, filtr) {

    return async dispatch => {

        let url = '/Data/films.json'

        if (filtr === "tv-series") {
            url = '/Data/tv-series.json'
        }

        if (filtr === 'films' || filtr === 'tv-series') filtr = 'all'

        const response = await fetch(url)

        if (response.ok) {

            dispatch(fetchFilmsSuccess(response))

            const data = await response.json()
            const films = data.movies

            let arr = []

            switch (filtr) {

                case "all":

                    arr = Object.keys(films).map((filmNum) => {
                        const film = films[filmNum]
                        if (film.poster && filmNum <= count) {
                            return (<FilmItem key={filtr + filmNum} film={film} isLittleIcon={isLittleIcon} />)
                        }
                    });
                    break;

                default:

                    if (filtr) {
                        arr = Object.keys(films).map((filmNum) => {
                            const film = films[filmNum]
                            if (film.poster && film.title.toLowerCase().indexOf(filtr.toLowerCase()) !== -1) {
                                return (<FilmItem key={filmNum} film={film} isLittleIcon={isLittleIcon} />)
                            }
                        })
                    } else {
                        arr = Object.keys(films).map((filmNum) => {
                            const film = films[filmNum]
                            if (film.poster && filmNum <= count) {
                                return (<FilmItem key={filmNum} film={film} isLittleIcon={isLittleIcon} />)
                            }
                        })
                    }
            }

            dispatch(fetchFindFilmsSuccess(arr))

        } else {

            dispatch(fetchFilmsError(response.status))

            console.log("Ошибка HTTP: " + response.status);
        }
    }
}

export function fetchFindFilmsSuccess(films) {
    return {
        type: FETCH_FIND_FILMS_SUCCESS,
        films
    }
}

export function fetchFilmsSuccess(status) {
    return {
        type: FETCH_FILMS_SUCCESS,
        status
    }
}

export function fetchFilmsError(e) {
    return {
        type: FETCH_FILMS_ERROR,
        error: e
    }
}