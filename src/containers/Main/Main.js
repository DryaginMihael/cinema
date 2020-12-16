import React from 'react'
import './Main.css'
import Films from './Films/Films'
import SettingSearch from './SettingSearch/SettingSearch'
import FilmPlayer from './FilmPlayer/FilmPlayer'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Container from '../../components/Align/Container/Container'
import Button from '../../components/UI/Button/Button'


let routes = (
    <Switch>
        <Route path="/player" component={FilmPlayer} />
        <Route path="/random" component={FilmPlayer} />
        <Route path="/:filtr" exact component={Films} />
        <Route path="/search/:filtr" exact component={Films} />
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
                    <div
                        className="sidebars"
                        style={this.props.location.pathname.includes("player") ? { gridTemplateColumns: "1fr" } : null}
                    >
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