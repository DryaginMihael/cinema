import React from 'react'
import './FilmsList.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { drawFilms } from '../../../../store/actions/films'
import FilmItem from '../FilmItem/FilmItem'


class FilmsList extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLittleIcon !== this.props.isLittleIcon
            || nextProps.count !== this.props.count
            || nextProps.match.params.filtr !== this.props.match.params.filtr
            || nextProps.SettingSearch.search !== this.props.SettingSearch.search) {
            this.props.drawFilms(nextProps.isLittleIcon, nextProps.count, nextProps.match.params.filtr, nextProps.SettingSearch)
        }
    }

    componentDidMount() {
        this.props.drawFilms(this.props.isLittleIcon, this.props.count, this.props.match.params.filtr, this.props.SettingSearch)
    }

    render() {
        return (
            <ul className="films-list">
                {this.props.FilmsList.map((film) => {
                    return (<FilmItem
                        setLikes={this.props.setLikes}
                        key={film.key}
                        film={film.film}
                        isLittleIcon={film.isLittleIcon}
                        like={film.like}
                    />)
                })}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        FilmsList: state.films.FilmsList,
        SettingSearch: {
            search: state.wideSearch.search,
            films: state.wideSearch.films,
            mult: state.wideSearch.mult,
            serials: state.wideSearch.serials,
            anime: state.wideSearch.anime,
            year: state.wideSearch.year,
            country: state.wideSearch.country,
            quality: state.wideSearch.quality,
            genr: state.wideSearch.genr
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        drawFilms: (isLittleIcon, count, filtr, settingSearch) => dispatch(drawFilms(isLittleIcon, count, filtr, settingSearch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilmsList))