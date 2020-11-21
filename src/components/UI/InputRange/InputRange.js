import React from 'react'
import './InputRange.css'

export default class InputRange extends React.Component {
    state = {
        value: 7
    }

    changeHandler = (event) => {
        this.setState({ value: event.target.value })
    }

    createStars = () => {
        const stars = []

        for (let i = 1; i <= 10; i++) {
            let classes = ['far', 'fa-star']
            if (i <= this.state.value) {
                classes.push('star-active')
            }

            stars.push((<i className={classes.join(' ')}></i>))
        }
        return (stars)
    }

    render() {
        return (
            <label
                className="range"
                forId={this.props.id}
            >
                {this.props.children}
                <div className="stars">{this.state.value} {this.createStars()} </div>
                <br />
                <input
                    onChange={this.changeHandler}
                    name="name"
                    className="custom-range"
                    type="range"
                    step="1"
                    min="0"
                    max="10"
                    value={this.state.value}
                    id={this.props.id}
                ></input>
            </label>
        )
    }

}