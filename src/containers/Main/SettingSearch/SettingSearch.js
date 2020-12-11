import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import InputRange from '../../../components/UI/InputRange/InputRange';
import { setFormState } from '../../../store/actions/search';
import FilmItem from '../Films/FilmItem/FilmItem';
import './SettingSearch.css';


class SettingSearch extends React.Component {

    render() {

        const arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
        const years = ['2020', '2019', '2018', '2017', '2016', '2010-2015', '2000-2009', 'до 2000']
        const genres = ["История", "Биография", "Драма", "Военный", "Триллер", "Драма", "Детектив", "Приключения", "Криминал", "Ужасы", "Фантастика", "Комедия"]
        const countries = ["США", "СССР", "Великобритания", "Франция", "Ирландия", "Нидерланды", "Италия", "Испания", "Германия (ФРГ)", "Япония"]
        const qualities = ["HD", "FullHD", "4K", "HD-RIP"]

        return (
            <section className={this.props.showSetting ? "setting-search show" : "setting-search"}>
                <form>
                    <div className="shuffle-cont">
                        <button className="shuffle"><i className="fas fa-random"></i> Случайный выбор</button>
                    </div>

                    <div className="two-col">

                        <NavLink to="/widesearch">
                            <input
                                onClick={() => this.props.setFormState({ search: !this.props.search })}
                                type="button"
                                className="button setting-item"
                                value="Поиск"
                            ></input>
                        </NavLink>
                        <input type="reset" className="button setting-item" value="Очистить"></input>

                        <input onChange={(event) => this.props.setFormState({ films: event.target.value })} name="films" type="checkbox" className="custom-checkbox" id="films" />
                        <label className="setting-item" htmlFor="films">
                            Фильмы</label>
                        <input onChange={(event) => this.props.setFormState({ mult: event.target.value })} name="mult" type="checkbox" className="custom-checkbox" id="mult" />
                        <label className="setting-item" htmlFor="mult">
                            Мультфильмы</label>
                        <input onChange={(event) => this.props.setFormState({ serials: event.target.value })} name="serials" type="checkbox" className="custom-checkbox" id="serials" />
                        <label className="setting-item" htmlFor="serials">
                            Сериалы</label>
                        <input onChange={(event) => this.props.setFormState({ anime: event.target.value })} name="anime" type="checkbox" className="custom-checkbox" id="anime" />
                        <label className="setting-item" htmlFor="anime">
                            Аниме</label>
                        <select onChange={(event) => this.props.setFormState({ year: event.target.value })} name="year" className="setting-item">
                            <option value="year">Год</option>
                            {years.map((year) => { return <option value={year}>{year}</option> })}
                        </select>
                        <select onChange={(event) => this.props.setFormState({ country: event.target.value })} name="country" className="setting-item">
                            <option value="country">Страна</option>
                            {countries.map((country) => { return <option value={country}>{country}</option> })}
                        </select>
                        <select onChange={(event) => this.props.setFormState({ quality: event.target.value })} name="quality" className="setting-item">
                            <option value="quality">Качество</option>
                            {qualities.map((quality) => { return <option value={quality}>{quality}</option> })}
                        </select>
                        <select onChange={(event) => this.props.setFormState({ genr: event.target.value })} name="genres" className="setting-item">
                            <option value="genr">Жанр</option>
                            {genres.map((genr) => { return <option value={genr}>{genr}</option> })}
                        </select>
                    </div>

                    <InputRange onChangeHandler={this.props.setFormState} name={"kp"} id={"kp"} >Рейтинг КП </InputRange>
                    <InputRange onChangeHandler={this.props.setFormState} name={"imdb"} id={"imdb"}>Рейтинг IMDB</InputRange>

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
                                film={{
                                    name: "Бойцовский клуб",
                                    poster: "//images.kinopoisk.cloud/posters/361.jpg",
                                    rate: "9.6"
                                }}
                                isLittleIcon={true}
                            />
                        </div>
                        <div className="film-new">
                            <FilmItem
                                film={{
                                    name: "Джентельмены",
                                    poster: "//images.kinopoisk.cloud/posters/1143242.jpg",
                                    rate: "9.8"
                                }}
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

function mapDispatchToProps(dispatch) {
    return {
        setFormState: (formState) => dispatch(setFormState(formState))
    }
}


export default connect(null, mapDispatchToProps)(SettingSearch)