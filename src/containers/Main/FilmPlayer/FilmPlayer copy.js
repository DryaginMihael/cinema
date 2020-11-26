import React from 'react'
import Button from '../../../components/UI/Button/Button';
import './FilmPlayer.css'



export default class FilmPlayer extends React.Component {

    state = {
        title: "",
        id_kinopoisk: null,
        description: "",
        poster: "",
        directors: [],
        actors: [],
        countries: [],
        generes: [],

        frames: [],
        carouselShift: null,
        activeFrame: "",

        rating_kinopoisk: null,
        comments: [
            {
                author: "Lorem ipsum",
                img: "",
                text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptate placeat
                aspernatur, minima dicta debitis optio, excepturi iure itaque eveniet commodi neque
                accusamus corrupti? Aspernatur maxime accusamus optio amet voluptate.`
            }
        ],
        currentUser: {
            author: "Lorem ipsum",
            img: ""
        },
    }

    async drawFilmBlock(isLittleIcon) {

        const kp_id = window.location.pathname.replace("/film/", "");

        const response = await fetch('/Data/films.json')

        if (response.ok) {
            const data = await response.json()
            const films = data.movies

            Object.keys(films).forEach((filmNum) => {
                const film = films[filmNum]
                if (film.id_kinopoisk === kp_id) {
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
            <ul className="frames-carousel" style={{
                transform: `translateX(${this.state.carouselShift}px)`
            }}>
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

        const comments = this.state.comments.map((comment) => {
            return (
                <li className="comment">
                    <div className="comment-img">
                        <img src={comment.img} alt=""></img>
                    </div>
                    <div className="comment-body">
                        <h4 className="comment-author">{comment.author}</h4>
                        <p className="comment-text">{comment.text}</p>
                    </div>
                </li>
            )
        })

        const createComment = (
            <li className="comment">
                <div className="comment-img">
                    <img src={this.state.currentUser.img} alt=""></img>
                </div>
                <div className="comment-body">
                    <h4 className="comment-author">{this.state.currentUser.author}</h4>
                    <textarea></textarea>
                </div>
                <Button classesButton={["dark"]}>Отправить</Button>
            </li>
        )

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
                                <td>{this.state.actors.join(", ")}</td>
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

                <ul className="comments-list">
                    {/* {comments} */}
                    {/* {createComment} */}
                </ul>

            </div>
        )
    }
}