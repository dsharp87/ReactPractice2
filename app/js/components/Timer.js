import React from 'react'
import { TimerHeader } from './Timer/TimerHeader'
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
            // timesAtRestart: [1,2,3], --this isn't working
        }
        this.handleClick = this.handleClick.bind(this)
        this.restartClick = this.restartClick.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.startTimer(),
        1000)
    }

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
            // timesAtRestart : prevState.timesAtRestart.concat(prevState.time),
            time : 0
        }))
    }

 

    render() {
        return (
            <div>
                <TimerHeader time={this.state.time} restartCount={this.state.restartCount} totalTime={this.state.totalTime} timesAtRestart={this.state.timesAtRestart}/>
                <TimerButton handleClick={this.handleClick} isStarted={this.state.isStarted} />
                <RestartButton restartClick={this.restartClick}/>
            </div>
        )
    }
}


