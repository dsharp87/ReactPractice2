import React from 'react';
import NameRow from './NameRow'
import names from '../../../../mock-data'

export default class FilterableNameList extends React.Component {    
    constructor() {
        super();
        this.state = {
            names: [],
            // event: 'no event detected',
            filterText: ''

        }
        // this.handleClick = this.handleClick.bind(this);
        this.nameFilter = this.nameFilter.bind(this);
    }


    componentWillMount() {
        this.setState({
            names: names
        })
    }

    // handleClick(event) {
    //     event.preventDefault();
    //     this.setState({
    //         event: event.type
    //     })
    // }

    nameFilter(event) {
        this.setState({
            filterText: event.target.value
        })
    }

    render() {
        let {names} = this.state
        let {filterText} = this.state
        if(filterText.length)
            names = names.filter((name) => {
                let fullName = `${name.first_name} ${name.last_name}`;
                return fullName.toLowerCase().includes(filterText.toLocaleLowerCase());
            });
        return (
            <div>
                {/* {JSON.stringify(this.state, null, 2)} */}
                <h1>Hello, I'm the namelist component!</h1>
                <input onChange={this.nameFilter} type="text"></input>
                <div className="pure-g">
                    {names.map((name) => 
                        <NameRow key={name.id} name={name} />
                    )}
                </div>
            </div>
        )
    }
}
