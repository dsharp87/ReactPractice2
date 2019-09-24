import React from 'react';
import NameRow from './NameRow'
import styles from './NameList.css'

import faker from 'faker'




export default class FilterableNameList extends React.Component {    
    constructor() {
        super();
        this.filterNames = this.filterNames.bind(this);
        this.addName = this.addName.bind(this);
    }

    addName() {
        const newName = {
            "first_name": faker.name.firstName(),
            "last_name": faker.name.lastName(),
            "email": faker.internet.email(),
            "city": faker.address.city(),
            "catch_phrase": faker.hacker.phrase()
        }
        this.props.addName(newName);
    }

    //takes the text found in filter box and called the reducer function 'filter names' found in container file
    //the reducer has turned the redux action into a prop that is passed into the component from the container file
    filterNames(event) {
        console.log("filterNames event triggered in filterableNameList component")
        const { value } = event.target;
        this.props.filterNames(value)
    }

    render() {
        let {names, filterText} = this.props;
        //this is the FILTER_NAMES action from the reducer that filteres names, but has been passed down as a prop from the container file
        console.log("i'm in filterableNameList and about to render")
        // console.log(this.props)
        return (
            <div className={styles.namelist}>
                <h1>Hello, I'm the namelist component!</h1>
                {/* every time the user types into the text box, it should trigger a new filter action */}
                <input onChange={this.filterNames} type="text" value={filterText}></input>
                <div>
                    <button onClick={this.addName}>Add Random Name</button>
                </div>
                <div className="pure-g">
                    {/* the delete name actions passed as a prop from the container function is then passed as another prop to the child component of NameRow */}
                    {names.map((name) => 
                        <NameRow key={name.id} name={name} deleteName={this.props.deleteName} />
                    )}
                </div>
            </div>
        )
    }
}
