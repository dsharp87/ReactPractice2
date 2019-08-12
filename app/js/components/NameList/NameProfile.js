import React from 'react'
import names from '../../../../mock-data'
import { browserHistory, Link } from 'react-router'

export default class NameProfile extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let { id } = this.props.params;
        this.user = names.find((name) =>
            name.id === +id
        )
        // console.log(this.result)
    }
        
    render() {
        let user = this.user;
        if(user) {
            user = 
            <div>
                <h2>{user.first_name} {user.first_name}</h2>
                <p>lives in {user.city} and can be reached at <a href={`mailto:${user.email}`}>email</a>.</p>
                <p>{user.first_name} loves to say: "{user.catch_phrase}"</p>
            </div>
        } else {
            user = <h2>Sorry, this user was not found :(</h2>
        }
        return (
            <div>
            {/* {JSON.stringify(this.props.params.id)} */}
                {user}
               <button><Link to="/names">Go to all the names</Link></button>
            </div>
        )
    }
}