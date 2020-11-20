import React from 'react'
import './FilmCarousel.css'

export default class FilmItem extends React.Component {

    render() {

        return (
            <li class="film-carousel" >
                <div class="preview" >
                    <img src="" alt=""></img>
                    <div class="quality">HD-RIP</div>
                    <div class="translate">Дубляж</div>
                    <div class="rate"><i class="far fa-star"></i> 7.5</div>
                    <div class="name">Lorem ipsum</div>
                </div>
            </li>
        )
    }
}