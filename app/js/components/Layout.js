import React from 'react'
import Button from './Button'
import Timer from './Timer'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Danny',
            lastName: 'Swayne',
            isTimerMounted: true
        }
    }

    toggleTimers() {
        this.setState(prevState => ({
            isTimerMounted: !prevState.isTimerMounted
        }))
    }

    changeName() {
        if(this.state.firstName == 'Danny')
        {
            this.setState({
                firstName: 'Jane',
                lastName: 'Smith'
            })
        } else {
            this.setState({
                firstName: 'Danny',
                lastName: 'Swayne'
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2>Welcome to my site!</h2>
                <h3>Happy to have you here :)</h3>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>Hit the button to toggle between "Danny" and "Jane"</h2>
                <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)}/>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button onClick={this.toggleTimers.bind(this)}>toggle timers</button>
                {this.state.isTimerMounted ? 
                    <div>
                        <Timer />
                        <Timer />
                        <Timer />
                    </div>
                    :null
                }

                
            </div>
        )
    }
}