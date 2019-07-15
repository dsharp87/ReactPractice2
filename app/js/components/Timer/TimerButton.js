import React from 'react'

export default class TimerButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h4>Timing Runninng State: {String(this.props.isStarted).toUpperCase()}</h4>
                <button onClick={this.props.handleClick}>{this.props.isStarted ? 'Stop Timer' : 'Start Timer'}</button>
            </div>
        )
    }
}