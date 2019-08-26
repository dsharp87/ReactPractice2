const initialNameState = {
    names: [],
    filterText: ''
}

const name = (state = initialNameState, action) => {
    switch(action.type) {
        case 'GET_NAMES':
            return {...state, names: action.names};
        case 'FILTER_NAMES':
            return {...state, filterText: action.text};
        
            case 'DELETE_NAME':
            const newNames = state.names.filter((name) =>
                name.id !== action.id
            );
            return {...state, names: newNames};
        
        default:
            return state;
    }
}

export default name;