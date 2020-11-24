import React from 'react'
import FilmsList from './FilmsList/FilmsList'
import './Films.css'
import Loading from '../../../components/UI/Loader/Loader'
import Button from '../../../components/UI/Button/Button'
import Center from '../../../components/Align/Center/Center'

export default class Films extends React.Component {

    state = {
        isLittleIcon: true,
        loading: false,
        count: 20
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


            if (window.pageYOffset < 600) {
                fastScroll.style.display = "none"
            } else {
                fastScroll.style.display = "inline"
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

                <FilmsList
                    isLittleIcon={this.state.isLittleIcon}
                    count={this.state.count}
                />
                <Center>
                    {this.state.loading ? <Loading /> : <Button
                        classesButton={['dark']}
                        clickHandler={() => this.loading()}
                    >Показать ещё</Button>}
                </Center>
            </section>
        )
    }
}
