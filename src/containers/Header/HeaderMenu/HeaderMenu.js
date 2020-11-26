import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderMenu.css'

export default class HeaderMenu extends React.Component {

    state = {
        visible: false
    }

    showMenu = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <nav className={this.state.visible ? "header-menu visible" : "header-menu"} >
                <ul>
                    <li className="burger" onClick={this.showMenu}><i className="fas fa-align-justify"></i></li>

                    <li><a href="/"><i className="fas fa-home"></i>&#32; Главная</a></li>

                    <li><i className="fas fa-film"></i> Сериалы</li>
                    <li><i className="fas fa-film"></i> Фильмы</li>
                    <li><i className="far fa-star"></i> Популярные категории</li>
                    <li><i className="fas fa-trophy"></i> Топы</li>
                    <li>Вы остановились на <i className="far fa-pause-circle"></i></li>
                    <li><i className="far fa-heart"></i> Закладки</li>
                </ul>
            </nav>
        )
    }

}