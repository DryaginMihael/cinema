import React from 'react'
import './HeaderMenu.css'

export default class HeaderMenu extends React.Component{

    render() {
        return (
            <div className="header-menu">
                <ul>
                    <li><i className="fas fa-home"></i>&#32; Главная</li>
                    <li><i className="fas fa-film"></i> Сериалы</li>
                    <li><i className="fas fa-film"></i> Фильмы</li>
                    <li><i className="far fa-star"></i> Популярные категории</li>
                    <li><i className="fas fa-trophy"></i> Топы</li>
                    <li>Вы остановились на <i className="far fa-pause-circle"></i></li>
                    <li><i className="far fa-heart"></i> Закладки</li>
                </ul>
            </div>
        )
    }

}