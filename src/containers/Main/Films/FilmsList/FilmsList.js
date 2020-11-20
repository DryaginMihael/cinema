import React from 'react'
import './FilmsList.css'
import FilmItem from '../FilmItem/FilmItem'

export default class FilmsList extends React.Component {

    drawFilms(count, isLittleIcon) {

        const arr = []

        let upgrade = {}

        isLittleIcon
            ? upgrade = {
                filmStyle: { width: "150px" },
                descStyle: { display: "none" },
                previewStyle: { margin: "0" }
            }
            : upgrade = {
                filmStyle: { width: "100%" },
                descStyle: { display: "inline" },
                previewStyle: { margin: "15px" }
            }

        for (let i = 0; i < count; i++) {
            arr.push(<FilmItem key={i} upgrade={upgrade} />)
        }

        return (
            arr
        )
    }

    render() {
        return (
            <ul className="films-list">
                {this.drawFilms(this.props.count, this.props.isLittleIcon)}
            </ul>
        )
    }
}