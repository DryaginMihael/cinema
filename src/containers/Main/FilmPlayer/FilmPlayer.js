import React from 'react'
import { connect } from 'react-redux';
// import Button from '../../../components/UI/Button/Button';
import { fetchPlayer } from '../../../store/actions/player';
import './FilmPlayer.css'



class FilmPlayer extends React.Component {

    state = {
        carouselShift: 0,
        activeFrame: ""
    }

    componentDidMount() {

        this.props.drawFilmBlock()

        let activeFrameNum = 0

        setInterval(() => {
            const framesCarousel = document.querySelector('.frames-carousel');
            if (framesCarousel) {
                const widthList = framesCarousel.offsetWidth + 1000
                const visibleList = 600
                activeFrameNum++
                if (activeFrameNum > this.props.frames.length) {
                    activeFrameNum = 0
                }
                this.props.frames.forEach(
                    (frame, index) => {
                        if (index === activeFrameNum) {
                            this.setState({ activeFrame: frame })
                        }
                    })
                this.setState({ carouselShift: this.state.carouselShift - 70 })
                if (-this.state.carouselShift >= widthList - visibleList) {
                    this.setState({ carouselShift: 0 })
                }
            }
        }, 5000)
    }

    activeFrameHandler = (evt, frame) => {
        this.setState({ activeFrame: frame })
        document.querySelector('.active-frame')?.classList.remove('active-frame')
        evt.target.className = "active-frame"
    }

    render() {

        localStorage.setItem('lastFilm', this.props.id_kinopoisk)

        const frames = (<div className="frames">
            <h2>Кадры:</h2>
            <div className="activeimg">
                <img src={this.state.activeFrame || this.props.activeFrame} alt="" height="400px" ></img>
            </div>
            <ul className="frames-carousel" style={{
                transform: `translateX(${this.state.carouselShift}px)`
            }}>
                {this.props.frames.map((frame, index) => {
                    return (
                        <li
                            key={`frame${index}`}
                            onClick={(evt) => this.activeFrameHandler(evt, frame)}
                        >
                            <img src={frame} alt="" height="60px"></img>
                        </li>
                    )
                })}
            </ul>
        </div>)

        // const comments = this.props.comments.map((comment) => {
        //     return (
        //         <li className="comment">
        //             <div className="comment-img">
        //                 <img src={comment.img} alt=""></img>
        //             </div>
        //             <div className="comment-body">
        //                 <h4 className="comment-author">{comment.author}</h4>
        //                 <p className="comment-text">{comment.text}</p>
        //             </div>
        //         </li>
        //     )
        // })

        // const createComment = (
        //     <li className="comment">
        //         <div className="comment-img">
        //             <img src={this.props.currentUser.img} alt=""></img>
        //         </div>
        //         <div className="comment-body">
        //             <h4 className="comment-author">{this.props.currentUser.author}</h4>
        //             <textarea></textarea>
        //         </div>
        //         <Button classesButton={["dark"]}>Отправить</Button>
        //     </li>
        // )

        return (
            <div className="film-block">
                <img src={""} alt=""></img>
                <div className="header-film">
                    <div className="poster">
                        <img src={this.props.poster} alt="" width="200px"></img>
                    </div>
                    <div className="info">
                        <h2>{this.props.title ? this.props.title : "Упс, описание не найдено!"}</h2>
                        <table>
                            <tbody>
                                {this.props.directors.length !== 0 ?
                                    <tr>
                                        <td className="first-column">Режжисер</td>
                                        <td>{this.props.directors.join(" ")}</td>
                                    </tr> : null
                                }
                                {
                                    this.props.actors.length !== 0 ?
                                        <tr>
                                            <td className="first-column">Актеры</td>
                                            <td>{this.props.actors.join(", ")}</td>
                                        </tr> : null
                                }
                                {
                                    this.props.countries.length !== 0 ?
                                        <tr>
                                            <td className="first-column">Страны</td>
                                            <td>{this.props.countries.join(' ')}</td>
                                        </tr> : null
                                }
                                {
                                    this.props.rating_kinopoisk ? <tr>
                                        <td className="first-column">Рейтинг КиноПоиск</td>
                                        <td>{this.props.rating_kinopoisk}</td>
                                    </tr> : null
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
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

function mapStateToProps(state) {
    return {
        title: state.player.title,
        id_kinopoisk: state.player.id_kinopoisk,
        description: state.player.description,
        poster: state.player.poster,
        directors: state.player.directors,
        actors: state.player.actors,
        countries: state.player.countries,
        generes: state.player.generes,

        frames: state.player.frames,
        activeFrame: state.player.activeFrame,

        rating_kinopoisk: state.player.rating_kinopoisk,
        comments: state.player.comments,
        currentUser: state.player.currentUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        drawFilmBlock: () => dispatch(fetchPlayer())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmPlayer)