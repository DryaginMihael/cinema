import React from 'react'
import './FilmItem.css'
import { NavLink } from 'react-router-dom'

export default class FilmItem extends React.Component {

    showFilmHandler = () => {
    }

    render() {
        return (
            // <NavLink to={'/film/' + this.props.name}>
            <li className={"film" + (this.props.isLittleIcon ? '' : ' wide')} >
                <div
                    className={"preview" + (this.props.isLittleIcon ? '' : ' wide')}
                    onClick={this.showFilmHandler}
                >
                    <img src={this.props.poster} alt="" width="150px" height="217px"></img>
                    <div className="quality">HD-RIP</div>
                    <div className="translate">Дубляж</div>
                    <div className="rate"><i class="far fa-star"></i> {this.props.rate}</div>
                    <div className="name">{this.props.name}</div>
                </div>
                <div className={"desc" + (this.props.isLittleIcon ? '' : ' wide')} >
                    <h2>{this.props.name}</h2>
                    <p>
                        {this.props.desc}
                    </p>
                </div>
            </li>
            // </NavLink>
        )
    }
}