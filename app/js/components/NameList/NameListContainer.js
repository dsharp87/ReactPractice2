import React from 'react';
import { connect } from 'react-redux';

import { getNames, filterNames, deleteName } from '../../actions/names';
import FilterableNameList from './FilterableNameList';
import store from '../../store';
import names from '../../../../mock-data';

class NameListContainer extends React.Component {
    componentDidMount(){
        console.log("about to get names from container did mount")
        store.dispatch(getNames(names))
    }

    //this is whats rendering the filterable name list, exporting all the state and redux actions as props
    render() {
        console.log("i'm in NameList Containser and about to render")
        return <FilterableNameList {...this.props} />
    }
}

//maps the state to props by accessing StateStorage(store). 
//Tends to extract computational logic from the "view" file of the component into this file
const mapStateToProps = (store) => {
    const namesArray = store.names;
    const { filterText } = store;
    console.log("about to return State map to props in namelist container")
    return {
        //filters the names array to only contain names that have the specific substring that is stored in 'filtered text' part of sate.  Trigger by typing in filter box
        names: namesArray,
        filteredNames: namesArray.filter((name) => {
            const fullName = `${name.first_name} ${name.last_name}`;
            return fullName.toLowerCase().includes(filterText.toLowerCase())
        })    
    }
}

//maps redux dispatch calls to props of the component.  
//The definition of action name has been extracted into the actions folder, so that simple functions can be called instead of text string literals
const mapDispatchToProps = (dispatch) => {
    console.log("about to return Dispatch map to props in namelist container")
    return {
        filterNames: (text) => {
            dispatch(filterNames(text))
        },
        deleteName: (id) => {
            dispatch(deleteName(id))
        }
    }
}


//must export mapping constents so they are found by the contained component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameListContainer)