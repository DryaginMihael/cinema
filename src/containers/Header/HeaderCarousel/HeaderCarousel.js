import React from 'react'
import './HeaderCarousel.css'
import FilmItem from '../../Main/Films/FilmItem/FilmItem'
import { connect } from 'react-redux'
import { drawCarousel } from '../../../store/actions/carousel'

class HeaderCarousel extends React.Component {

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

        this.props.drawCarousel(this.props.count)

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
                        {this.props.FilmsCarousel.map((film, index) => {
                            return (index < this.props.count) ?
                                (<FilmItem
                                    setLikes={this.props.setLikes}
                                    key={film.key}
                                    film={film.film}
                                    isLittleIcon={film.isLittleIcon}
                                    like={film.like}
                                />) :
                                null
                        })}
                    </ul>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        FilmsCarousel: state.carousel.FilmsCarousel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        drawCarousel: (count) => dispatch(drawCarousel(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCarousel)