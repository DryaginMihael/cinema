import React from 'react'
import { withRouter } from 'react-router-dom'
import Container from '../../components/Align/Container/Container'
import './Header.css'
import HeaderCarousel from './HeaderCarousel/HeaderCarousel'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderTop from './HeaderTop/HeaderTop'


class Header extends React.Component {

    state = {
        visible: false,
    }

    setVisible = (setting) => {
        this.setState({ visible: setting })
    }

    render() {
        console.log(this.props);
        return (
            <header>
                <Container >
                    <HeaderTop visible={this.state.visible} />
                    <HeaderMenu setVisible={this.setVisible} />
                    {this.props.location.pathname.includes("player") ?
                        null :
                        <HeaderCarousel count={10} />}
                </Container>
            </header >
        )
    }
}

export default withRouter(Header)