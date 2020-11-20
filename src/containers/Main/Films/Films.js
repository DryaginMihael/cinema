import React from 'react'
import FilmsList from './FilmsList/FilmsList'
import './Films.css'

export default class Films extends React.Component {

    state = {
        isLittleIcon: true,
    }

    toggleHandler = () => {
        this.setState({ isLittleIcon: !this.state.isLittleIcon })
    }

    render() {
        return (
            <section className="films">
                <div className="toggle-location">
                    <h3>НОВЫЕ ФИЛЬМЫ И СЕРИАЛЫ</h3>
                    <i className={this.state.isLittleIcon ? "fas fa-th active" : "fas fa-th"} onClick={this.toggleHandler}></i>
                    <i className={this.state.isLittleIcon ? "fas fa-align-justify" : "fas fa-align-justify active"} onClick={this.toggleHandler}></i>
                    <div className="sort">
                        Сортировать по
                            <ul>
                            <li>дате</li>
                            <li>рейтингу</li>
                            <li>алфавиту</li>
                            <li>случайно</li>
                        </ul>
                    </div>
                </div>

                <FilmsList count={20} isLittleIcon={this.state.isLittleIcon} />

            </section>
        )
    }
}
