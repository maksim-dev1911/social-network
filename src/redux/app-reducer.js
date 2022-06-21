import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR';
const CLEAR_GLOBAL_ERROR = 'CLEAR_GLOBAL_ERROR';

const initialState = {
    initialized: false,
    //{code: string, message: string}
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.payload
            }
        case CLEAR_GLOBAL_ERROR:
            return {
                ...state,
                globalError: null
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setGlobalError = (code, message) => {
    console.log(code, message)
    return {
        type: SET_GLOBAL_ERROR,
        payload: {code, message}
    }
};
export const clearGlobalError = () => {
    return {
        type: CLEAR_GLOBAL_ERROR
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;