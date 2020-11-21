import React from 'react'
import './FilmCarousel.css'

export default class FilmItem extends React.Component {

    render() {

        return (
            <li class="film-carousel" >
                <div class="preview" >
                    <img src={this.props.poster} alt="" width="150px" height="217px"></img>
                    <div class="quality">HD-RIP</div>
                    <div class="translate">Дубляж</div>
                    <div class="rate"><i class="far fa-star"></i> 7.5</div>
                    <div class="name">{this.props.name}</div>
                </div>
            </li>
        )
    }
}