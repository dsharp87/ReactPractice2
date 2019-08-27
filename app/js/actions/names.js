//action types
export const GET_NAMES = 'GET_NAMES';
export const FILTER_NAMES = 'FILTER_NAMES';
export const DELETE_NAME = 'DELETE_NAME';


//action creators

//extracts the (type,value) object from the reducer into an exported function to simplify syntax and allow for reusability in other reducers
export function getNames(names) {
    console.log("just exported getNames from action folder")
    return {
        type: GET_NAMES,
        names: names
    }
}

export function filterNames(text) {
    console.log("just exported filterNames from action folder")
    return {
        type: FILTER_NAMES,
        text: text
    }
}

export function deleteName(id) {
    console.log("just exported deleteName from action folder")
    return {
        type: DELETE_NAME,
        id: id
    }
}