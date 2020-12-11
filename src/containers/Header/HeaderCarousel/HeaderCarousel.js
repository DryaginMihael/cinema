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
        // const slider = document.querySelector('.carousel-contain');

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

        const slider = document.querySelector('.carousel-contain');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.changedTouches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('pointerleave', () => {
            isDown = false;
        });

        slider.addEventListener('pointerup', () => {
            isDown = false;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.changedTouches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    drawFilms = async () => {

        // let response = await fetch('http://localhost:3000/movies')
        const response = await fetch('/Data/films.json')

        if (response.ok) {
            // const films = await response.json()
            const data = await response.json()
            const films = data.movies

            let arr = []

            arr = Object.keys(films).map((filmNum) => {
                const film = films[filmNum]
                if (filmNum < this.props.count) {
                    return (<FilmItem
                        key={"carousel" + filmNum}
                        film={film}
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
            <div className="carousel">
                <button className="prev" onClick={this.prevOnClick}>
                    <i className="fas fa-arrow-circle-left"></i>
                </button>
                <button className="next" onClick={this.nextOnClick}>
                    <i className="fas fa-arrow-circle-right"></i>
                </button>
                <div className="carousel-contain">
                    <ul
                        style={{
                            transform: `translateX(${this.state.shift}px)`,
                            width: `${this.props.count * this.state.widthItem}px`
                        }}
                    >
                        {this.state.FilmsList}
                    </ul>
                </div>
            </div >
        )
    }

}