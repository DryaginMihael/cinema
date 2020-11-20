import React from 'react'
import './Main.css'
import Add from './Add/Add'
import Films from './Films/Films'
import SettingSearch from './SettingSearch/SettingSearch'
import Trailer from './Trailer/Trailer'

export default function Main() {
    return (
        <main>
            <div className="container">
                <Add />
                <Trailer />
                <div className="sidebars">
                    <Films />
                    <SettingSearch />
                </div>
            </div>
        </main>
    )
}