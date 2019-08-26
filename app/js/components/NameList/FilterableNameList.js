import React from 'react';
import NameRow from './NameRow'
import styles from './NameList.css'



export default class FilterableNameList extends React.Component {    
    constructor() {
        super();
        this.filterNames = this.filterNames.bind(this);
    }

    filterNames(event) {
        const { value } = event.target;
        this.props.filterNames(value)
    }

    render() {
        let {names} = this.props;
        let {filteredNames} = this.props
        console.log(this.props)
        if(filteredNames)
            names = filteredNames;
        return (
            <div className={styles.namelist}>
                <h1>Hello, I'm the namelist component!</h1>
                <input onChange={this.filterNames} type="text"></input>
                <div className="pure-g">
                    {names.map((name) => 
                        <NameRow key={name.id} name={name} deleteName={this.props.deleteName} />
                    )}
                </div>
            </div>
        )
    }
}
