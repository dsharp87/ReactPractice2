import React from 'react'

export default class TimerButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h4>{this.props.isStarted}</h4>
                <button onClick={this.props.handleClick}>{this.props.isStarted ? 'Stop Timer' : 'Start Timer'}</button>
            </div>
        )
    }
}