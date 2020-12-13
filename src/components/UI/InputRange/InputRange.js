import React from 'react'
import './InputRange.css'

export default class InputRange extends React.Component {

    changeHandler = (event) => {
        this.props.onChangeHandler({ [event.target.name]: event.target.value })
    }

    createStars = () => {
        const stars = []

        for (let i = 1; i <= 10; i++) {
            let classes = ['far', 'fa-star']
            if (i <= this.props.value) {
                classes.push('star-active')
            }

            stars.push((<i key={`star${i}`} className={classes.join(' ')}></i>))
        }
        return (stars)
    }

    render() {
        return (
            <label
                className="range"
                htmlFor={this.props.id}
            >
                {this.props.children}
                <div className="stars">{this.props.value} {this.createStars()} </div>
                <br />
                <input
                    onChange={this.changeHandler}
                    name={this.props.name}
                    className="custom-range"
                    type="range"
                    step="1"
                    min="0"
                    max="10"
                    value={this.props.value}
                    id={this.props.id}
                ></input>
            </label>
        )
    }
}