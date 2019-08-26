import React from 'react'
import { Link } from 'react-router';

import styles from './NameList.css';

export default class NameRow extends React.Component {
    constructor() {
        super();
    }
        
    render() {
        let {first_name, last_name, id} = this.props.name;
        
        return (
            <div className={`pure-u-1 pure-u-md-1-3`}>
                <h3 className={styles.name}><Link to={`/names/${id}`}>{first_name} {last_name}</Link></h3>
                <button onClick={() => this.props.deleteName(id)}>Delete Above Name</button>
            </div>
        )
    }
}


