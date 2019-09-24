import React from 'react';
import { connect } from 'react-redux';

import { filterNames, deleteName, addName } from '../../actions/names';

import FilterableNameList from './FilterableNameList'



//WE DON'T NEEED TO CREATE A REACT COMPONENT BECAUSE THE EXPORT CONNECT CREATES A CONTAINER COMPONENT 
//THE NAMES ARE MADE AVAIALABLE BY AN onEnter tag in the routing file


//maps the state to props by accessing StateStorage(store). 
//Tends to extract computational logic from the "view" file of the component into this file
const mapStateToProps = (store) => {
    const namesArray = store.name.names;
    const { filterText } = store.name;
    console.log("about to return State map to props in namelist container")
    return {
        //filters the names array to only contain names that have the specific substring that is stored in 'filtered text' part of sate.  Trigger by typing in filter box
        names: namesArray.filter((name) => {
            const fullName = `${name.first_name} ${name.last_name}`;
            return fullName.toLowerCase().includes(filterText.toLowerCase())
        }), 
        filterText: filterText  
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
        },
        addName: (payload) => {
            dispatch(addName(payload))
        }
    }
}


//must export mapping constents so they are found by the contained component.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableNameList)