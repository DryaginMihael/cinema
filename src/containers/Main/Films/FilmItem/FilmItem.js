import React from 'react'
import './FilmItem.css'
import { NavLink } from 'react-router-dom'

export default class FilmItem extends React.Component {

    state = {
        like: false
    }

    setLike = (event, id) => {

        event.stopPropagation();

        const newLikeValue = !this.state.like
        this.setState({ like: newLikeValue })
        this.props.setLikes(id, newLikeValue);
        console.log(localStorage);
    }

    componentDidMount() {
        if (this.props.like) {
            this.setState({ like: true })
        }
    }

    render() {
        const description = (
            <div className="short-info">
                <h2>{this.props.film.title}</h2>
                <table>
                    <tr>
                        <td className="first-column">Режисер</td>
                        <td>{Array.isArray(this.props.film.directors) ? this.props.film.directors.join(", ") : "-"}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Год</td>
                        <td>{this.props.film.year}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Жанр</td>
                        <td>{Array.isArray(this.props.film.genres) ? this.props.film.genres.join(", ") : "-"}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Краткое описание</td>
                        <td>{this.props.film.description}</td>
                    </tr>
                </table>
            </div>
        )

        return (
            < li className={"film" + (this.props.isLittleIcon ? '' : ' wide')} >
                <a
                    href={'/player/' + this.props.film.id_kinopoisk}
                >
                    <div className={"preview" + (this.props.isLittleIcon ? '' : ' wide')}>
                        <img
                            src={this.props.film.poster} alt="" width="150px"
                            onDrag={() => false}
                        ></img>
                        {this.props.film.rating_kinopoisk ?
                            <div className="kp">KP {this.props.film.rating_kinopoisk}</div> :
                            null}
                        {this.props.film.rating_imdb ?
                            <div className="imdb">IMDB {this.props.film.rating_imdb}</div> :
                            null}

                        <div className="name">{this.props.film.title}</div>
                    </div>
                </a >
                <div className="rate" onClick={(event) => this.setLike(event, this.props.film.id_kinopoisk)} style={this.state.like ? { color: "red" } : { color: "white" }}><i className="far fa-heart"></i></div>

                <div className={"desc" + (this.props.isLittleIcon ? '' : ' wide')} >
                    {description}
                </div>
            </li >
        )
    }
}