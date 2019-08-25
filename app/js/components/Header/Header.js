import React from 'react';
import styles from './Header.css'

import NavList from './NavList';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div className={`pure-menu pure-menu-horizontal ${styles.nav}`}>
            <NavList className="pure-menu-heading pure-menu-link" to="/">HOME</NavList>
            <ul className="pure-menu-list">
                <li className="pure-menu-item"><NavList className="pure-menu-link" to="/products">Products</NavList></li>
                <li className="pure-menu-item"><NavList className="pure-menu-link" to="/names">Name List</NavList></li>
            </ul>
        </div>
        )
    }
}


<div class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a>
    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">News</a></li>
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sports</a></li>
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Finance</a></li>
    </ul>
</div>