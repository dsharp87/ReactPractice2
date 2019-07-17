import React from 'react'

export const TimerHeader = ((props) => 
    <div>
        <h3>Current timer has been running for {props.time} seconds</h3>
        <h3>Total of all times in this location (current + all restarted) is {props.totalTime + props.time} seconds</h3>
        <h3>I've been restarted {props.restartCount} {props.restartCount != 1 ? 'times' : 'time'}</h3>
        {/* <ul>
            {this.props.timesAtRestart.map( val => (
                <li key={val}>{val}</li>
            ))}
        </ul> */}
    </div>
)