import React from 'react'
import './FilmItem.css'
import { NavLink } from 'react-router-dom'

export default class FilmItem extends React.Component {

    render() {

        const description = (
            <div className="short-info">
                <h2>{this.props.title}</h2>
                <table>
                    <tr>
                        <td className="first-column">Режжисер</td>
                        <td>{Array.isArray(this.props.directors) ? this.props.directors.join(" ") : null}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Год</td>
                        <td>{this.props.year}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Краткое описание</td>
                        <td>{this.props.description}</td>
                    </tr>
                </table>
            </div>
        )

        return (
            <a
                href={'/film/' + this.props.id_kinopoisk}
                onSelectStart={() => false}
            >
                <li className={"film" + (this.props.isLittleIcon ? '' : ' wide')}>
                    <div className={"preview" + (this.props.isLittleIcon ? '' : ' wide')}>
                        <img
                            src={this.props.poster} alt="" width="150px"
                            onDrag={() => false}
                        ></img>
                        <div className="quality">HD-RIP</div>
                        <div className="translate">Дубляж</div>
                        <div className="rate"><i class="far fa-star"></i> {this.props.rating_kinopoisk}</div>
                        <div className="name">{this.props.title}</div>
                    </div>

                    <div className={"desc" + (this.props.isLittleIcon ? '' : ' wide')} >
                        {description}
                    </div>
                </li>
            </a>
        )
    }
}