import React from 'react'
import './FastScroll.css'

export default class FastScroll extends React.Component {

    componentDidMount() {

        // const fastScroll = document.querySelector('.fast-scroll')

        // window.onscroll = () => {

        //     if (window.pageYOffset < 600) {
        //         fastScroll.style.display = "none"
        //     } else {
        //         fastScroll.style.display = "inline"
        //     }
        // }
    }

    scrollHandler = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <span
                className="fast-scroll"
                onClick={this.scrollHandler}
            >
                <i class="fas fa-arrow-up"></i>
            </span>
        )
    }
}