import React from 'react'
import './FilmPlayer.css'



export default class FilmPlayer extends React.Component {

    state = {
        carouselShift: null,
        directors: [],
        actors: [],
        countries: [],
        rating_kinopoisk: null
    }

    async drawFilmBlock(isLittleIcon) {

        const kp_id = window.location.pathname.replace("/film/", "");

        let response = await fetch('http://localhost:3000/movies')

        if (response.ok) {
            const films = await response.json()

            Object.keys(films).forEach((filmNum) => {
                const film = films[filmNum]
                if (film.id_kinopoisk == kp_id) {
                    this.setState({
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
                    })
                }
            })
        } else {
            console.log("Ошибка HTTP: " + response.status)
        }
    }

    componentDidMount() {
        this.drawFilmBlock()

        let activeFrameNum = 0

        setInterval(() => {
            const widthList = document.querySelector('.frames-carousel').offsetWidth + 1000
            const visibleList = 600
            activeFrameNum++
            if (activeFrameNum > this.state.frames.length) {
                activeFrameNum = 0
            }
            this.state.frames.forEach(
                (frame, index) => {
                    if (index === activeFrameNum) {
                        this.setState({ activeFrame: frame })
                    }
                })
            this.setState({ carouselShift: this.state.carouselShift - 100 })
            if (-this.state.carouselShift >= widthList - visibleList) {
                this.setState({ carouselShift: 0 })
            }
        }, 5000)
    }

    activeFrameHandler = (evt, frame) => {
        this.setState({ activeFrame: frame })
        document.querySelector('.active-frame')?.classList.remove('active-frame')
        evt.target.className = "active-frame"
    }

    render() {

        const frames = (<div className="frames">
            <h2>Кадры:</h2>
            <div className="activeimg">
                <img src={this.state?.activeFrame} alt="" height="400px" ></img>
            </div>
            <ul className="frames-carousel" style={{ transform: `translateX(${this.state.carouselShift}px)` }}>
                {this.state?.frames ? this.state.frames.map((frame) => {
                    return (
                        <li
                            onClick={(evt) => this.activeFrameHandler(evt, frame)}
                        >
                            <img src={frame} alt="" height="60px"></img>
                        </li>
                    )
                }) : null}
            </ul>
        </div>)

        return (
            <div className="film-block">
                <img src={""} alt=""></img>
                <div className="header-film">
                    <div className="poster">
                        <img src={this.state.poster} alt="" width="200px"></img>
                    </div>
                    <div className="info">
                        <h2>{this.state.title}</h2>
                        <table>
                            <tr>
                                <td className="first-column">Режжисер</td>
                                <td>{this.state?.directors.join(" ")}</td>
                            </tr>
                            <tr>
                                <td className="first-column">Актеры</td>
                                <td>{this.state.actors.join(" ")}</td>
                            </tr>
                            <tr>
                                <td className="first-column">Страны</td>
                                <td>{this.state.countries.join(' ')}</td>
                            </tr>

                            <tr>
                                <td className="first-column">Рейтинг КиноПоиск</td>
                                <td>{this.state.rating_kinopoisk}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="description">
                    <p>{this.state.description}</p>
                </div>

                <h2>Смотреть онлайн</h2>

                <div className="uitools" id="uitools"></div>

                {frames}

            </div>
        )
    }
}