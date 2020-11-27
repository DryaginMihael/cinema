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

                    <NavLink to="/"><li><i className="fas fa-home"></i>&#32; Главная</li></NavLink>

                    <NavLink to="/tv-series"><li><i className="fas fa-film"></i> Сериалы</li></NavLink>
                    <NavLink to="/films"><li><i className="fas fa-film"></i> Фильмы</li></NavLink>
                    <NavLink to="/popular"><li><i className="far fa-star"></i> Популярные категории</li></NavLink>
                    <NavLink to="/top"><li><i className="fas fa-trophy"></i> Топы</li></NavLink>
                    <NavLink to="/pause"><li>Вы остановились на <i className="far fa-pause-circle"></i></li></NavLink>
                    <NavLink to="/"><li><i className="far fa-heart"></i> Закладки</li></NavLink>
                </ul>
            </nav>
        )
    }

}