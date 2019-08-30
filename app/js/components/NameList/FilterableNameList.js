import React from 'react';
import NameRow from './NameRow'
import styles from './NameList.css'




export default class FilterableNameList extends React.Component {    
    constructor() {
        super();
        this.filterNames = this.filterNames.bind(this);
    }

    //takes the text found in filter box and called the reducer function 'filter names' found in container file
    //the reducer has turned the redux action into a prop that is passed into the component from the container file
    filterNames(event) {
        console.log("filterNames event triggered in filterableNameList component")
        const { value } = event.target;
        this.props.filterNames(value)
    }

    render() {
        let {names} = this.props;
        //this is the FILTER_NAMES action from the reducer that filteres names, but has been passed down as a prop from the container file
        let {filteredNames} = this.props
        console.log("i'm in filterableNameList and about to render")
        // console.log(this.props)
        if(filteredNames)
            names = filteredNames;
        return (
            <div className={styles.namelist}>
                <h1>Hello, I'm the namelist component!</h1>
                {/* every time the user types into the text box, it should trigger a new filter action */}
                <input onChange={this.filterNames} type="text"></input>
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
