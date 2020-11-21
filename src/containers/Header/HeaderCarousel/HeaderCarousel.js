import React from 'react'
import './HeaderCarousel.css'
import FilmItem from '../../Main/Films/FilmItem/FilmItem'

export default class HeaderCarousel extends React.Component {

    state = {
        shift: 0,
        widthItem: 170,
        FilmsList: null,
    }

    prevOnClick = () => {
        this.setState({ shift: this.state.shift + this.state.widthItem })
        if (this.state.shift >= 0) {
            this.setState({ shift: 0 })
        }
    }

    nextOnClick = () => {
        const widthList = this.props.count * this.state.widthItem
        const visibleList = 6 * this.state.widthItem
        this.setState({ shift: this.state.shift - this.state.widthItem })
        if (this.state.shift <= visibleList - widthList) {
            this.setState({ shift: 0 })
        }
    }


    componentDidMount() {
        this.drawFilms()
        setInterval(() => {
            const widthList = this.props.count * this.state.widthItem
            const visibleList = 6 * this.state.widthItem
            this.setState({ shift: this.state.shift - this.state.widthItem })
            if (this.state.shift <= visibleList - widthList) {
                this.setState({ shift: 0 })
            }
        }, 10000)
    }

    async drawFilms() {

        let response = await fetch('./films.json');

        if (response.ok) {
            const data = await response.json()
            const films = data.movies

            let arr = []

            arr = Object.keys(films).map((filmNum) => {
                const film = films[filmNum]
                if (filmNum < 10) {
                    return (<FilmItem
                        key={"carousel" + filmNum}
                        name={film.title}
                        poster={film.poster}
                        isLittleIcon={true}
                    />)
                } else {
                    return null
                }
            })
            this.setState({ FilmsList: arr })
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    render() {

        return (
            <div class="carousel">
                <button className="prev" onClick={this.prevOnClick}>
                    <i className="fas fa-arrow-circle-left"></i>
                </button>
                <button className="next" onClick={this.nextOnClick}>
                    <i className="fas fa-arrow-circle-right"></i>
                </button>
                <div className="carousel-contain">
                    <ul style={{ transform: `translateX(${this.state.shift}px)`, width: `${this.props.count * (this.state.widthItem + 20)}px` }}>
                        {this.state.FilmsList}
                    </ul>
                </div>
            </div >
        )
    }

}