import React from 'react'

import { browserHistory, Link } from 'react-router'
import { namelist } from './NameList.css'

export default class NameProfile extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        //params are strings, we need to convert it to to a number for comparison purposes
        let id  = +this.props.params.id;
        this.props.getProfile(id);
    }
        
    render() {
        let user = this.props.currentProfile;
        if(user) {
            user = 
            <div>
                <h2>{user.first_name} {user.last_name}</h2>
                <p>lives in {user.city} and can be reached at <a href={`mailto:${user.email}`}>email</a>.</p>
                <p>{user.first_name} loves to say: "{user.catch_phrase}"</p>
            </div>
        } else {
            user = <h2>Sorry, this user was not found :(</h2>
        }
        return (
            <div className={namelist}>
            {/* {JSON.stringify(this.props.params.id)} */}
                {user}
               <Link to="/names"><button className="pure-button">Go to all the names</button></Link>
            </div>
        )
    }
}