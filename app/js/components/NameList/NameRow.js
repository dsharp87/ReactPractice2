import React from 'react'

export default class NameRow extends React.Component {
    constructor() {
        super();
    }
        
    render() {
        let {first_name} = this.props.name
        let {last_name} = this.props.name

        return (
            <h3>{first_name} {last_name}</h3>
        )
    }
}


