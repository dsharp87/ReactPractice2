//action types
export const GET_NAMES = 'GET_NAMES';
export const FILTER_NAMES = 'FILTER_NAMES';
export const DELETE_NAME = 'DELETE_NAME';
export const GET_PROFILE = 'GET_PROFILE';
export const ADD_NAME = "ADD_NAME";


//action creators

//extracts the (type,value) object from the reducer into an exported function to simplify syntax and allow for reusability in other reducers
export const getNames = (names) => {
    console.log("just exported getNames from action folder")
    return {
        type: GET_NAMES,
        names: names
    }
}

export const filterNames = (text) => {
    console.log("just exported filterNames from action folder")
    return {
        type: FILTER_NAMES,
        text: text
    }
}

export const deleteName = (id) => {
    console.log("just exported deleteName from action folder")
    return {
        type: DELETE_NAME,
        id: id
    }
}

export const getProfile = (id) => {
    console.log("just exported getProfile from action folder")
    return {
        type: GET_PROFILE,
        id: id
    }
}

export const addName = (payload) => {
    return {
        type: ADD_NAME,
        payload: payload
    }
}