import React from 'react'
import './HeaderTop.css'
import { NavLink, withRouter } from 'react-router-dom'

class HeaderTop extends React.Component {

    state = {
        searchValue: ""
    }

    searchStart = (e) => {
        if (e.code === 'Enter') {
            this.props.history.push(`/search/${this.state.searchValue}`)
        };
    }

    render() {
        return (
            <div className={"header-top" + (this.props.visible ? " visible" : "")}>

                <div className="logo">
                    <h1>KINO</h1>
                </div>
                <div className="search">
                    <input
                        onInput={(evt) => this.setState({ searchValue: evt.target.value })}
                        type="text"
                        placeholder="Введите название"
                        name="search"
                        id="search"
                        onKeyDown={(e) => this.searchStart(e)}
                    />
                    <NavLink to={'/search/' + this.state.searchValue}>
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </NavLink>
                </div>
                <div className="auth">
                    <button>
                        <i className="fas fa-sliders-h"></i>
                    </button>
                    <button>
                        <i className="fas fa-lock"></i>
                &emsp;Выйти
                    </button>
                    <button>
                        <i className="fas fa-user"></i>
                &emsp;Кабинет
                    </button>

                </div>
            </div>
        )
    }

}

export default withRouter(HeaderTop)