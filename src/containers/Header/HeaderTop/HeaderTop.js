import React from 'react'
import './HeaderTop.css'

export default class HeaderTop extends React.Component {

    render() {
        return (
            <div className="header-top">
                <div className="logo">
                    <h1>KINO</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Введите название" />
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
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