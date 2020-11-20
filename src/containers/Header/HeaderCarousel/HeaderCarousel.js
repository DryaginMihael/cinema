import React from 'react'
import './HeaderCarousel.css'
import FilmCarousel from './FilmCarousel/FilmCarousel'

export default class HeaderCarousel extends React.Component {

    state = {
        shift: 0,
        widthItem: 170,
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
        setInterval(() => {
            const widthList = this.props.count * this.state.widthItem
            const visibleList = 6 * this.state.widthItem
            this.setState({ shift: this.state.shift - this.state.widthItem })
            if (this.state.shift <= visibleList - widthList) {
                this.setState({ shift: 0 })
            }
        }, 10000)
    }

    drawFilms(count) {

        const arr = []

        for (let i = 0; i < count; i++) {
            arr.push(<FilmCarousel key={i} />)
        }

        return (
            arr
        )
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
                        {this.drawFilms(this.props.count)}
                    </ul>
                </div>
            </div >
        )
    }

}