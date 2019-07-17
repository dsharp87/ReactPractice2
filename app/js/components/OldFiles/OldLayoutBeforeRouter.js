import React from 'react';
// import Button from './Button'
import FilterableNameList from '../FilterableNameList';
import Timer from '../Timer'

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: 'Danny',
            lastName: 'Swayne',
            isTimerMounted: true
        }
    }
    //TIME TOGGLE FUNCTIONALITY
    // toggleTimers() {
    //     this.setState(prevState => ({
    //         isTimerMounted: !prevState.isTimerMounted
    //     }))
    // }

    //NAME CHANGE FUNCTIONALITY
    // changeName() {
    //     if(this.state.firstName == 'Danny')
    //     {
    //         this.setState({
    //             firstName: 'Jane',
    //             lastName: 'Smith'
    //         })
    //     } else {
    //         this.setState({
    //             firstName: 'Danny',
    //             lastName: 'Swayne'
    //         })
    //     }
    // }
    
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome to my site!</h1>
                    <h3>I'm inside the header</h3>
                </header>

                {/* NAME CHANGE FUNCTIONALITY */}
                {/* <h1>{this.state.firstName} {this.state.lastName}</h1> */}
                {/* <h2>Hit the button to toggle between "Danny" and "Jane"</h2> */}
                {/* <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)}/> */}
                {/* TOGGLE TIMER FUNCTIONALITY */}
                {/* <button onClick={this.toggleTimers.bind(this)}>toggle timers</button>
                {this.state.isTimerMounted ? 
                    <div> */}
                        {/* <Timer /> */}
                    {/* </div>
                    :null
                } */}
                <Timer />
                <FilterableNameList />
            </div>
        )
    }
}
