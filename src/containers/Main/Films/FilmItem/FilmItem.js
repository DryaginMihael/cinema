import React from 'react'
import './FilmItem.css'

export default class FilmItem extends React.Component {

    render() {
        return (
            <li class="film" style={this.props.upgrade.filmStyle}>
                <div class="preview" style={this.props.upgrade.previewStyle}>
                    <img src="" alt=""></img>
                    <div class="quality">HD-RIP</div>
                    <div class="translate">Дубляж</div>
                    <div class="rate"><i class="far fa-star"></i> 7.5</div>
                    <div class="name">Lorem ipsum</div>
                </div>
                <div class="desc" style={this.props.upgrade.descStyle}>
                    <h2>Lorem ipsum</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptate placeat
                        aspernatur, minima dicta debitis optio, excepturi iure itaque eveniet commodi neque
                        accusamus corrupti? Aspernatur maxime accusamus optio amet voluptate.Tempore dolor
                        recusandae ducimus cumque expedita eius vitae nam in, quos, sit ipsam mollitia
                        magnam,
                        ab tenetur. Dolorem enim sed animi dolore, ipsa possimus nulla incidunt! Eum beatae
                        possimus illum?
                    </p>
                </div>
            </li>
        )
    }
}