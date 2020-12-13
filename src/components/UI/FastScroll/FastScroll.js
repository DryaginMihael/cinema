import React from 'react'
import './FastScroll.css'

export default class FastScroll extends React.Component {

    scrollHandler = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <span
                className="fast-scroll"
                onClick={this.scrollHandler}
            >
                <i className="fas fa-arrow-up"></i>
            </span>
        )
    }
}