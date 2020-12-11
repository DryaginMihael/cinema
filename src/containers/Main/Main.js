import React from 'react'
import './Main.css'
import Add from './Add/Add'
import Films from './Films/Films'
import SettingSearch from './SettingSearch/SettingSearch'
import Trailer from './Trailer/Trailer'
import FilmPlayer from './FilmPlayer/FilmPlayer'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Container from '../../components/Align/Container/Container'
import Button from '../../components/UI/Button/Button'


let routes = (
    <Switch>
        <Route path="/player" component={FilmPlayer} />
        <Route path="/:filtr" exact component={Films} />
        <Route path="/" exact component={Films} />
        <Redirect to="/" />
    </Switch>
)

class Main extends React.Component {

    state = {
        showSetting: false
    } 

    render() {
        return (
            <main>
                <Container >
                    {/* <Add /> */}
                    {/* <Trailer /> */}
                    <div className="sidebars">
                        {routes}

                        <Button
                            clickHandler={() => this.setState({ showSetting: !this.state.showSetting })}
                            classesButton={["dark", "button-hide", "wide-search"]}
                            classesIcon={this.state.showSetting ? ["fas fa-times"] : ["fas fa-search"]}
                        >Расширенный поиск</Button>
                        {this.props.location.pathname.includes("player") ?
                            null :
                            <SettingSearch showSetting={this.state.showSetting} />}
                    </div>
                </Container>
            </main >
        )
    }

}

export default withRouter(Main)