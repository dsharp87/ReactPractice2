import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    constructor() {
        super()
    }

    
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome to my site!</h1>
                    <h3>I'm inside the header</h3>
                    <Link to="/timer">Timer</Link>
                    <Link to="/namelist">NameList</Link>
                </header>

                {this.props.children}

                <footer>
                    <h5>I'm the footer :D</h5>
                </footer>
            </div>
        )
    }
}
