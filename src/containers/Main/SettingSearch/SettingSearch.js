import React from 'react'
import './SettingSearch.css'
import FilmItem from '../Films/FilmItem/FilmItem'
import InputRange from '../../../components/UI/InputRange/InputRange';

export default class SettingSearch extends React.Component {

    render() {

        let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

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

                    <InputRange id={"kp"} >Рейтинг КП </InputRange>
                    <InputRange id={"imdb"}>Рейтинг IMDB</InputRange>

                    <div className="alphabet">
                        По алфавиту
                            <ul>
                            {arr_RU.map((char) => <li>{char}</li>)}
                        </ul>
                    </div>
                </form>

                <div className="new-films">
                    <h2>Лучшее:</h2>
                    <div className="films-new">
                        <div className="film-new">
                            <FilmItem
                                name={"Бойцовский клуб"}
                                poster={"//images.kinopoisk.cloud/posters/361.jpg"}
                                rate={"9.6"}
                                isLittleIcon={true}
                            />
                        </div>
                        <div className="film-new">
                            <FilmItem
                                name={"Джентельмены"}
                                poster={"//images.kinopoisk.cloud/posters/1143242.jpg"}
                                rate={"9.8"}
                                isLittleIcon={true}
                            />
                        </div>
                    </div>
                </div>

                <ul className="FAQ">
                    <h2>Часто задаваемые вопросы:</h2>
                    <li className="FAQblock">
                        <div className="question"><span>Вопрос:</span>  Почему некоторые фильмы не могу найти?</div>
                        <div className="answer"><span>Ответ:</span>  Сайт сделан в демонстративных целях и не преследует цели онлайн кинотеатра в полном объеме.</div>
                    </li>
                    <li className="FAQblock">
                        <div className="question"><span>Вопрос:</span>  Есть ли возможность сменить тему?</div>
                        <div className="answer"><span>Ответ:</span>  Да, в настройках вверху страницы всегда можно подобрать подходящую тему.</div>
                    </li>

                    <li className="FAQblock">
                        <div className="question"><span>Вопрос:</span>  Есть ли возможность смотреть фильм даже если поисковик не нашел его?</div>
                        <div className="answer"><span>Ответ:</span>  Да, нажмите кнопку "Смотреть фильм" и вам будет предложен фильм в соответствии с поисковым запросом, даже если фильма нет в базе данных.</div>
                    </li>

                </ul>

            </section >
        )
    }
}
