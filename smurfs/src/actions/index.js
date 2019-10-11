import axios from "axios";

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getSmurf = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {console.log(res.data); 
        dispatch({ type: FETCH_SUCCESS, payload: res.data })})
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response })); 
}

export const ADD_FETCHING = "ADD_FETCHING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const addSmurf = (smurf) => dispatch => {
    dispatch({type: ADD_FETCHING});
    axios
    .post(
      'http://localhost:3333/smurfs', smurf
    )
    .then(res => {
      console.log(res)
      dispatch({type: ADD_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch ({type: ADD_FAILURE, payload: err.response}))
  
  }




