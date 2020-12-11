import { FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS, FETCH_FIND_FILMS_SUCCESS } from './actionTypes'

export function drawFilms(isLittleIcon, count, filtr, settingSearch) {

    return async dispatch => {

        let url = '/Data/films.json'

        if (filtr === "tv-series") {
            url = '/Data/tv-series.json'
        }
        const keyFiltr = filtr
        if (filtr === 'films' || filtr === 'tv-series' || filtr === undefined || filtr === 'top') filtr = 'all'

        const response = await fetch(url)

        if (response.ok) {

            dispatch(fetchFilmsSuccess(response))

            const data = await response.json()
            const films = data.movies

            let arr = []

            function checkYear(filmYear, settingYear) {
                console.log(settingYear);
                switch (settingYear) {
                    case 'до 2000':
                        return filmYear < 2000
                    case '2010-2015':
                        return filmYear >= 2010 && filmYear <= 2015
                    case '2000-2009':
                        return filmYear >= 2000 && filmYear <= 2009
                    default:
                        if (settingYear === "year" || settingYear === "") {
                            return true
                        }
                        return filmYear === +settingYear
                }
            }

            function condition(film, filmNum) {
                switch (filtr) {
                    case "all":
                        return film.poster && filmNum <= count;
                    case "likes":
                        return film.poster && localStorage.getItem('likes')?.split(',').includes(film.id_kinopoisk);
                    case "widesearch":
                        console.log(settingSearch);
                        return film.poster
                            && checkYear(film.year, settingSearch.year)
                            && (settingSearch.genr === "" || settingSearch.genr === "Жанр" ? true : Boolean(~film.genres?.indexOf(settingSearch.genr)));
                    default:
                        if (filtr) {
                            return film.poster && film.title.toLowerCase().indexOf(filtr.toLowerCase()) !== -1
                        }
                        return film.poster && filmNum <= count;
                }
            }

            Object.keys(films).forEach((filmNum) => {
                const film = films[filmNum]
                if (condition(film, filmNum)) {
                    arr.push({ key: `${keyFiltr} ${filmNum}`, film: film, isLittleIcon: isLittleIcon, like: localStorage.getItem('likes')?.split(',').includes(film.id_kinopoisk) })
                }
            })

            if (keyFiltr === 'top') {
                arr = []
                films.sort((a, b) => {
                    if (+a.rating_kinopoisk > +b.rating_kinopoisk) {
                        return -1
                    } else if (+a.rating_kinopoisk < +b.rating_kinopoisk) {
                        return 1
                    } else {
                        return 0
                    }
                }).forEach((film, filmNum) => {
                    if (condition(film, filmNum)) {
                        arr.push({ key: `${keyFiltr} ${filmNum}`, film: film, isLittleIcon: isLittleIcon })
                    }
                })
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