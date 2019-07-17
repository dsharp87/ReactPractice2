import React from 'react'

export default class TimerHeader extends React.Component {  
    constructor() {
        super()
    }

    render() {
        let times = []
        if(this.props != undefined)
        {
            var idx = 0
            this.props.timesAtRestart.forEach(element => {               
                var entry =
                {
                    id: idx,
                    val: element 
                }
                times.push(entry)
                idx++
            })
        }
        return (
            <div>
                {/* {JSON.stringify(this.props, null, 2)} */}
                <h3>Current timer has been running for {this.props.time} seconds</h3>
                <h3>Total of all times in this location (current + all restarted) is {this.props.totalTime + this.props.time} seconds</h3>
                <h3>I've been restarted {this.props.restartCount} {this.props.restartCount != 1 ? 'times' : 'time'}.  Here are the times I've been restarted at:</h3>
                <ul>
                    {times.map((time) => 
                        <li key={time.id}>{time.val} seconds</li>  
                    )}

                </ul>
            </div>
        )
    }
}