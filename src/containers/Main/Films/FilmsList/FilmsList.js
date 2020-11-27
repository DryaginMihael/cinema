import React from 'react'
import './FilmsList.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { drawFilms } from '../../../../store/actions/films'


class FilmsList extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.props.drawFilms(this.props.isLittleIcon, this.props.count, this.props.match.params.filtr)
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.drawFilms(this.props.isLittleIcon, this.props.count, this.props.match.params.filtr)
    }

    render() {
        return (
            <ul className="films-list">
                {this.props.FilmsList}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        FilmsList: state.films.FilmsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        drawFilms: (isLittleIcon, count, filtr) => dispatch(drawFilms(isLittleIcon, count, filtr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilmsList))