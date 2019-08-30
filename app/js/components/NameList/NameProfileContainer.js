import React from 'react'
import { connect } from'react-redux'

import { getProfile } from '../../actions/names'
import NameProfile from './NameProfile'

//WE DON'T NEEED TO CREATE A REACT COMPONENT BECAUSE THE EXPORT CONNECT CREATES A CONTAINER COMPONENT 
//THE NAMES ARE MADE AVAIALABLE BY AN onEnter tag in the routing file

//there will now be a props.currentProfile that we can access as state from child component
const mapStateToProps = (store) => {
    return {
        currentProfile: store.name.currentProfile
    }
}

//there will now be the function/dispatch getProfile as props in the child component
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (id) => {
            dispatch(getProfile(id))
        }
    }
}

//must export mapping constents so they are found by the contained component.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameProfile)