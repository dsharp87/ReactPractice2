import React from 'react'
import Button from './Button'
import Timer from './Timer'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Danny',
            lastName: 'Swayne'
        }
    }

    changeName() {
        this.setState({
            firstName: 'Jane'
        })
    }
    
    render() {
        return (
            <div>
                <h2>Welcome to my site!</h2>
                <h3>Happy to have you here :)</h3>
                <h1>{this.state.firstName}</h1>
                <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)}/>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Timer />
                <Timer />
                <Timer />
            </div>
        )
    }
}