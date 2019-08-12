import React from 'react';

import { Link, IndexLink } from 'react-router';

export default class NavList extends React.Component {
    constructor() {
        super();
    }


    render() {
        let {to} = this.props;
        let activeClassName = "active"
        if(to === '/') {
            return <IndexLink {...this.props} activeClassName={activeClassName}/>
        } else {
            return <Link {...this.props} activeClassName={activeClassName} />
        }
    }
}

