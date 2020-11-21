import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <button
            onClick={props.clickHandler}
            className={props.classesButton ? props.classesButton.join(' ') : null}
        >
            <i className={props.classesIcon ? props.classesIcon.join(' ') : null}></i>
            {props.children}
        </button>
    )
}