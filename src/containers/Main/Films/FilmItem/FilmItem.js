import React from 'react'
import './FilmItem.css'
import { NavLink } from 'react-router-dom'

export default class FilmItem extends React.Component {

    render() {
        return (
            <a href={'/film/' + this.props.id_kinopoisk}>
                <li className={"film" + (this.props.isLittleIcon ? '' : ' wide')}>
                    <div className={"preview" + (this.props.isLittleIcon ? '' : ' wide')}>
                        <img src={this.props.poster} alt="" width="150px" height="217px"></img>
                        <div className="quality">HD-RIP</div>
                        <div className="translate">Дубляж</div>
                        <div className="rate"><i class="far fa-star"></i> {this.props.rating_kinopoisk}</div>
                        <div className="name">{this.props.title}</div>
                    </div>
                    <div className={"desc" + (this.props.isLittleIcon ? '' : ' wide')} >
                        <h2>{this.props.title}</h2>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </li>
            </a>
        )
    }
}