import React from 'react'
import TimerHeader  from './Timer/TimerHeader'
import TimerButton from './Timer/TimerButton'
import RestartButton from './Timer/RestartButton'

export default class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            isStarted: false,
            restartCount: 0,
            totalTime: 0,
            timesAtRestart: [],
            //this works, but trying to console log this array will return undefined
        }
        this.handleClick = this.handleClick.bind(this)
        this.restartClick = this.restartClick.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.startTimer(),
        1000)
        
    }

    // intended to set state of Array to default value
    // componentWillMount() {
    //     this.setState({
    //         timesAtRestart: [1,2,3]
    //     })
    // }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
 
    startTimer() {
        this.setState(prevState => ({
            time: prevState.time += 1
        }))
        this.setState({
            isStarted: true
        })
    }

    endTimer() {
        clearInterval(this.timer)
        this.setState({
            isStarted: false
        })
    }

    handleClick() {
        this.state.isStarted ?
            this.endTimer() :
            this.timer = setInterval(
                () => this.startTimer(),
            1000)
    }

    restartClick() {
        // console.log(typeof(timesAtRestart[0])) --these result in undefined, not sure yet
        // console.log(timesAtRestart[0])
        this.setState(prevState => ({
            restartCount : prevState.restartCount += 1,
            totalTime : prevState.totalTime += prevState.time,
            timesAtRestart : prevState.timesAtRestart.concat(prevState.time),
            time : 0
        }))
    }

 

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.state, null, 2)} */}
                <TimerHeader time={this.state.time} restartCount={this.state.restartCount} totalTime={this.state.totalTime} timesAtRestart={this.state.timesAtRestart} />
                <TimerButton handleClick={this.handleClick} isStarted={this.state.isStarted} />
                <RestartButton restartClick={this.restartClick}/>
            </div>
        )
    }
}


