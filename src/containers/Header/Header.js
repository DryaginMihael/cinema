import React from 'react'
import './Header.css'
import HeaderCarousel from './HeaderCarousel/HeaderCarousel'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderTop from './HeaderTop/HeaderTop'


export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="container">
                    <HeaderTop />
                    <HeaderMenu />
                    <HeaderCarousel count={10} />
                </div>
            </header>
        )
    }

}