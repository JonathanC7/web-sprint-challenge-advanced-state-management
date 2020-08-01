import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'; 

export const fetchSmurfsData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_ERROR, payload: err.message})
        })
}

export const addSmurf = createdSmurf => dispatch =>{
    axios
    .post('http://localhost:3333/smurfs', createdSmurf)
    .then(res => {
        dispatch({ type: ADD_SMURF, payload: createdSmurf})
    })
    .catch(err => [
        dispatch({ type: ADD_SMURF_ERROR, payload: err.message})
    ])
}