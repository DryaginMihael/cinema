import React from 'react'
import './Main.css'
import Add from './Add/Add'
import Films from './Films/Films'
import SettingSearch from './SettingSearch/SettingSearch'
import Trailer from './Trailer/Trailer'
import FilmPlayer from './FilmPlayer/FilmPlayer'
import { Switch, Route, Redirect } from 'react-router-dom'


let routes = (
    <Switch>
        <Route path="/film" component={FilmPlayer} />
        <Route path="/" exact component={Films} />
        <Redirect to="/" />
    </Switch>
)

export default class Main extends React.Component {



    render() {
        return (
            <main>
                <div className="container">
                    <Add />
                    <Trailer />
                    <div className="sidebars">
                        {routes}
                        <SettingSearch />
                    </div>
                </div>
            </main >
        )
    }

}