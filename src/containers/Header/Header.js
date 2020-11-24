import React from 'react'
import Container from '../../components/Align/Container/Container'
import './Header.css'
import HeaderCarousel from './HeaderCarousel/HeaderCarousel'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderTop from './HeaderTop/HeaderTop'


export default class Header extends React.Component {

    render() {
        return (
            <header>
                <Container >
                    <HeaderTop />
                    <HeaderMenu />
                    <HeaderCarousel count={10} />
                </Container>
            </header >
        )
    }

}