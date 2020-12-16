import React from 'react'
import FilmsList from './FilmsList/FilmsList'
import './Films.css'
import Loading from '../../../components/UI/Loader/Loader'
import Button from '../../../components/UI/Button/Button'
import Center from '../../../components/Align/Center/Center'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class Films extends React.Component {

    state = {
        isLittleIcon: true,
        loading: false,
        count: 20,
    }

    componentDidMount() {

        window.onscroll = () => {

            const scrollHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            )

            if (window.pageYOffset + document.documentElement.clientHeight > scrollHeight - 300 && this.state.loading) {
                this.setState({ count: this.state.count + 20 })
            }

            const fastScroll = document.getElementsByClassName('fast-scroll')[0]
            const wideSearch = document.getElementsByClassName('wide-search')[0]

            if (window.pageYOffset < 400) {
                fastScroll.style.display = "none"
                wideSearch.style.opacity = "0"
            } else {
                fastScroll.style.display = "inline"
                wideSearch.style.opacity = ".9"
            }

        }
    }

    toggleHandler = () => {
        this.setState({ isLittleIcon: !this.state.isLittleIcon })
    }

    loading = () => {
        this.setState({ loading: true })
        setTimeout(() => { this.setState({ count: this.state.count + 20 }) }, 500)
    }

    resetCount = () => {
        this.setState({ count: 20, loading: false })
    }

    render() {

        const route = (
            < Switch >
                <Route path="/" exact render={() => (<h3>НОВЫЕ ФИЛЬМЫ И СЕРИАЛЫ</h3>)} />
                <Route path="/top" render={() => (<h3>ТОП</h3>)} />
                <Route path="/films" render={() => (<h3>ФИЛЬМЫ</h3>)} />
                <Route path="/tv-series" render={() => (<h3>СЕРИАЛЫ</h3>)} />
                <Route path="/popular" render={() => (<><h3>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h3><p>(мелодрамы, комедии, боевики)</p></>)} />
                <Route path="/likes" render={() => (<h3>ЛЮБИМЫЕ</h3>)} />
                <Route path="/widesearch" render={() => (<><h3>РЕЗУЛЬТАТЫ ПОИСКА</h3><p>Найдено: {this.props.countFilms}</p></>)} />
                <Route path="/search" render={() => (<><h3>РЕЗУЛЬТАТЫ ПОИСКА</h3><p>Найдено: {this.props.countFilms}</p></>)} />
            </Switch >
        )

        const buttonLoader = (
            this.props.isEnd ?
                <p>На этом пока всё ;)</p> :
                (this.state.loading ? <Loading /> :
                    <Button
                        classesButton={['dark']}
                        clickHandler={() => this.loading()}
                    >
                        Показать ещё
                    </Button>)
        )

        const routeButton = (
            < Switch >
                <Route path="/" exact render={() => buttonLoader} />
                <Route path="/top" render={() => buttonLoader} />
                <Route path="/films" render={() => buttonLoader} />
                <Route path="/tv-series" render={() => buttonLoader} />
            </Switch >
        )

        return (
            <section className="films" >
                <div className="toggle-location">
                    {route}
                    <div className="toggle-icons">
                        <i className={this.state.isLittleIcon ? "fas fa-th active" : "fas fa-th"} onClick={this.toggleHandler}></i>
                        <i className={this.state.isLittleIcon ? "fas fa-align-justify" : "fas fa-align-justify active"} onClick={this.toggleHandler}></i>
                    </div>

                    <div className="sort">
                        {/* Сортировать по
                            <ul>
                            <li>дате</li>
                            <li>рейтингу</li>
                            <li>алфавиту</li>
                            <li>случайно</li>
                        </ul> */}
                    </div>
                </div>

                <FilmsList
                    isLittleIcon={this.state.isLittleIcon}
                    count={this.state.count}
                    resetCount={this.resetCount}
                />


                <Center>
                    {this.props.countFilms === 0 ?
                        <p>Ничего не найдено :(</p> :
                        routeButton
                    }
                </Center>


            </section>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        countFilms: state.films.FilmsList.length,
        isEnd: state.films.isEnd
    }
}

export default connect(mapStateToProps)(Films)