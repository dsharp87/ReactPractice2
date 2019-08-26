import React from 'react';
import { connect } from 'react-redux';

import FilterableNameList from './FilterableNameList';
import store from '../../store';
import names from '../../../../mock-data';

class NameListContainer extends React.Component {
    componentDidMount(){
        store.dispatch({type: 'GET_NAMES', names: names})
    }

    render() {
        return <FilterableNameList {...this.props} />
    }
}

const mapStateToProps = (store) => {
    const namesArray = store.names;
    const { filterText } = store;
    return {
        names: namesArray,
        filteredNames: namesArray.filter((name) => {
            const fullName = `${name.first_name} ${name.last_name}`;
            return fullName.toLowerCase().includes(filterText.toLowerCase())
        })    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterNames: (text) => {
            dispatch({type: 'FILTER_NAMES', text: text})
        },
        deleteName: (id) => {
            dispatch({type: 'DELETE_NAME', id: id})
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameListContainer)