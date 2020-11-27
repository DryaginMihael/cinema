import React from 'react'
import './HeaderTop.css'
import { NavLink } from 'react-router-dom'

export default class HeaderTop extends React.Component {

    state = {
        searchValue: ""
    }

    render() {
        return (
            <div className="header-top">

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
                    />
                    <NavLink to={'/' + this.state.searchValue}>
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