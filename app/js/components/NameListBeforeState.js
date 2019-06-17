import React from 'react';
import Welcome from './WelcomeBeforeState';

export  default class NameList extends React.Component {
    //name mapper
    nameMapper (nameArray) {
        return nameArray.map((name, i) => 
        <li key={i}>{name}</li>
        )
    }
    
    //redner method
    render() {
        const nameArray = ["Danny", "Mojojojojo2", "Dude"]
        const element = <p>I'm an element :D</p>
        return (
            <div>
                <Welcome firstName="Danny"  lastName="Swayne" originalPhrase={this.props.phrase} element={element}/>
                <ul>
                    {this.nameMapper(nameArray)}
                </ul>
                <Welcome firstName="Janey" lastName="Doe" originalPhrase="Yo mama!!!!" />
            </div>
        )
    }
} 