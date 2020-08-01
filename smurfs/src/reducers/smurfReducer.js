import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    ADD_SMURF,
    ADD_SMURF_ERROR
} from '../actions/index';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
    createSmurf: {}
}

export const smurfReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SMURFS_START: 
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: state.smurfs + action.payload,
                isFetching: false,
                error: ''
            }
        case ADD_SMURF_ERROR: 
            return {
                ...state,
                error: ''
            }
        default: 
            return state;
    }
}