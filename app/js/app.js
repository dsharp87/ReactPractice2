import React from 'react';
import ReactDOM from 'react-dom'

import Layout from './components/Layout'

import names from '../../mock-data'


class App extends React.Component {
    render() {
        return (
            <div>
                <Layout names={names} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
 