import React from 'react'
import './FilmsList.css'
import FilmItem from '../FilmItem/FilmItem'


export default class FilmsList extends React.Component {

    state = {
        FilmsList: null
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

        let response = await fetch('http://localhost:3000/movies')

        if (response.ok) {
            const films = await response.json()

            let arr = []
            arr = Object.keys(films).map((filmNum) => {
                const film = films[filmNum]
                if (film.poster && filmNum <= this.props.count) {
                    return (<FilmItem
                        key={filmNum}
                        title={film.title}
                        id_kinopoisk={film.id_kinopoisk}
                        description={film.description}
                        poster={film.poster}
                        rating_kinopoisk={film.rating_kinopoisk}
                        isLittleIcon={isLittleIcon}
                    />)
                }
            })
            this.setState({ FilmsList: arr })
        } else {
            console.log("Ошибка HTTP: " + response.status);
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
