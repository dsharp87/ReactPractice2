import React from 'react'

export default class RestartButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <button onClick={this.props.restartClick}>Restart</button>
            </div>
        )
    }
}