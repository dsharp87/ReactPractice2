import { GET_NAMES, FILTER_NAMES, DELETE_NAME } from '../actions/names';

//declare initial state
const initialNameState = {
    names: [],
    filterText: ''
}

//defining the reducer called 'name'
//use switch cases to figure out which action shoulb be run, then returns the state, after preforing the defined action on it
const name = (state = initialNameState, action) => {
    console.log(`im in name reducer about to look for an action called ${action.type}`)
    switch(action.type) {
        case GET_NAMES:
            console.log("im running the get names action")
            return {...state, names: action.names};
        case FILTER_NAMES:
            console.log("im running the fitler names action")
            return {...state, filterText: action.text};
        
        case DELETE_NAME:
            console.log("im running the delete name action")
            const newNames = state.names.filter((name) =>
                name.id !== action.id
            );
            return {...state, names: newNames};
        
        default:
            return state;
    }
}

export default name;