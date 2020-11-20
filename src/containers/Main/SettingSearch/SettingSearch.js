import React from 'react'
import './SettingSearch.css'

export default class SettingSearch extends React.Component {

    render() {
        return (
            <section className="setting-search">
                <form>
                    <div className="shuffle-cont">
                        <button className="shuffle"><i className="fas fa-random"></i> Случайный выбор</button>
                    </div>

                    <div className="two-col">
                        <button className="setting-item">Поиск</button>
                        <button className="setting-item">Очистить</button>
                        <input type="checkbox" className="custom-checkbox" id="films" />
                        <label className="setting-item" for="films">
                            Фильмы</label>
                        <input type="checkbox" className="custom-checkbox" id="mult" />
                        <label className="setting-item" for="mult">
                            Мультфильмы</label>
                        <input type="checkbox" className="custom-checkbox" id="serials" />
                        <label className="setting-item" for="serials">
                            Сериалы</label>
                        <input type="checkbox" className="custom-checkbox" id="anime" />
                        <label className="setting-item" for="anime">
                            Аниме</label>
                        <select className="setting-item">
                            <option>Год</option>
                        </select>
                        <select className="setting-item">
                            <option>Страна</option>
                        </select>
                        <select className="setting-item">
                            <option>Качество</option>
                        </select>
                        <select className="setting-item">
                            <option>Жанр</option>
                        </select>
                    </div>
                    <div className="range">
                        <label for="kp"> Рейтинг КП</label><br />
                        <input className="custom-range" type="range" min="0" max="10" value="7.5" id="kp" />
                    </div>
                    <div className="range">
                        <label for="imbd"> Рейтинг IMDB</label><br />
                        <input className="custom-range" type="range" min="0" max="10" value="7.5" id="imbd" />
                    </div>
                    <div className="alphabet">
                        По алфавиту
                            <ul>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                            <li>G</li>
                            <li>H</li>
                            <li>L</li>
                            <li>M</li>
                            <li>N</li>
                            <li>O</li>
                            <li>P</li>
                            <li>Q</li>
                            <li>R</li>
                            <li>S</li>
                            <li>T</li>
                            <li>U</li>
                            <li>V</li>
                            <li>W</li>
                            <li>X</li>
                            <li>Y</li>
                            <li>Z</li>
                        </ul>
                    </div>
                </form>

            </section>
        )
    }
}
