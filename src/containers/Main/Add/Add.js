import React from 'react'
import './Add.css'

export default function Add() {

    const closeHandler = () => {
        document.querySelector('.add').style.display = "none"
    }

    return (
        <div className="add">
            <h1>Реклама</h1>
            <h2>Здесь могла быть ваша реклама!</h2>
            <i className="fas fa-window-close" onClick={closeHandler}></i>

        </div>
    )
}