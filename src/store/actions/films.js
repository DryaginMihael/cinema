import { FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS, FETCH_FIND_FILMS_SUCCESS } from './actionTypes'

export function drawFilms(isLittleIcon, count, filtr, settingSearch) {

    return async dispatch => {

        let url = '/Data/films.json'

        if (filtr === "tv-series" || settingSearch.serials) {
            url = '/Data/tv-series.json'
        }
        const keyFiltr = filtr
        if (filtr === 'films' || filtr === 'tv-series' || filtr === 'top') filtr = 'all';
        if (filtr === undefined) filtr = 'new';
        if (filtr === 'widesearch' || filtr === 'search') count = Infinity

        const response = await fetch(url)

        if (response.ok) {

            dispatch(fetchFilmsSuccess(response))

            const data = await response.json()
            const films = data.movies

            let arr = []

            function isEnd(filmNum) {
                return films.length <= +filmNum + 1
            }

            function checkYear(filmYear, settingYear) {
                switch (settingYear) {
                    case 'year':
                        return true
                    case 'до 2000':
                        return filmYear < 2000
                    case '2010-2015':
                        return filmYear >= 2010 && filmYear <= 2015
                    case '2000-2009':
                        return filmYear >= 2000 && filmYear <= 2009
                    default:
                        return filmYear === +settingYear
                }
            }

            const likesFilm = localStorage.getItem('likes')?.split(',');

            function condition(film, filmNum) {
                switch (filtr) {
                    case "all":
                        return film.poster;
                    case "new":
                        return film.poster && film.year >= 2015 && film.year <= 2020;
                    case "popular":
                        return film.poster
                            && filmNum <= count
                            && (film.genres?.includes("Комедия")
                                || film.genres?.includes("Мелодрама")
                                || film.genres?.includes("Боевик"));
                    case "likes":
                        return film.poster && likesFilm?.includes(film.id_kinopoisk);
                    case "widesearch":
                        return film.poster
                            && checkYear(film.year, settingSearch.year)
                            && (settingSearch.genr === "genr" ? true : film.genres?.includes(settingSearch.genr))
                            && (settingSearch.mult ? film.genres?.includes("Мультфильм") : true)
                            && (settingSearch.anime ? film.genres?.includes("Аниме") : true)
                            && (settingSearch.country === "country" ? true : film.countries?.includes(settingSearch.country))
                            && (settingSearch.kp <= film.rating_kinopoisk)
                            && (film.rating_imdb ? settingSearch.imdb <= film.rating_imdb : true)

                    default:
                        if (filtr) {
                            return film.poster && film.title.toLowerCase().indexOf(filtr.toLowerCase()) !== -1
                        }
                        return film.poster;
                }
            }

            if (keyFiltr === 'top') {
                films.sort((a, b) => {
                    if (+a.rating_kinopoisk > +b.rating_kinopoisk) {
                        return -1
                    } else if (+a.rating_kinopoisk < +b.rating_kinopoisk) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }


            let countFilm = 0;

            films.forEach((film, filmNum) => {
                if (condition(film, filmNum) && ((filtr === 'widesearch') ? true : (count > countFilm))) {
                    countFilm++
                    arr.push({
                        key: `${keyFiltr} ${filmNum}`,
                        film: film,
                        isLittleIcon: isLittleIcon,
                        like: likesFilm?.includes(film.id_kinopoisk)
                    })
                }
            })

            const randomFilm = films[+(Math.random() * films.length).toFixed(0)];
            const randomId = randomFilm.id_kinopoisk;

            dispatch(fetchFindFilmsSuccess(arr, isEnd(count), randomId))

        } else {

            dispatch(fetchFilmsError(response.status))
            console.log("Ошибка HTTP: " + response.status);
        }
    }
}

export function fetchFindFilmsSuccess(films, isEnd, randomId) {
    return {
        type: FETCH_FIND_FILMS_SUCCESS,
        films,
        isEnd,
        randomId
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