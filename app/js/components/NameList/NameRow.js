import React from 'react'
import { Link } from 'react-router';

export default class NameRow extends React.Component {
    constructor() {
        super();
    }
        
    render() {
        let {first_name, last_name, id} = this.props.name;
        
        return (
            <h3><Link to={`/names/${id}`}>{first_name} {last_name}</Link></h3>
        )
    }
}


