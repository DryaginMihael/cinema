import React from 'react'
import './FilmsList.css'
import FilmItem from '../FilmItem/FilmItem'

export default class FilmsList extends React.Component {

    state = {
        FilmsList: null,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.drawFilms(nextProps.isLittleIcon)
        }
    }

    componentDidMount() {
        this.drawFilms(this.props.isLittleIcon)
    }

    async drawFilms(isLittleIcon) {

        let response = await fetch('./films.json');

        if (response.ok) {
            const data = await response.json()
            const films = data.movies

            let arr = []
            arr = Object.keys(films).map((filmNum) => {
                const film = films[filmNum]
                if (film.poster && filmNum <= this.props.count) {
                    return (<FilmItem
                        key={filmNum}
                        name={film.title}
                        desc={film.description}
                        poster={film.poster}
                        rate={film.rating_kinopoisk}
                        isLittleIcon={isLittleIcon}
                    />)
                }
            })
            this.setState({ FilmsList: arr })
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    render() {
        return (
            <ul className="films-list">
                {this.state.FilmsList}
            </ul>
        )
    }
}