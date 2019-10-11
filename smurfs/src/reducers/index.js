import { START_FETCHING, FETCH_SUCCESS, ADD_SUCCESS, ADD_FETCHING, FETCH_FAILURE, ADD_FAILURE } from '../actions';

const initialState = {
    isFetching: false,
    error: ' ', 
    smurf: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
        }
    ]
};

    

  const reducer = (state = initialState, action) => {
    console.log(state, 'smurf')
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          smurf: action.payload
        };
        case FETCH_FAILURE: 
        return {
            ...state, 
            error: action.payload,
            isFetching: false
        }
        case ADD_FETCHING:
            return {
              ...state,
            };
        case ADD_SUCCESS:
            return {
              ...state,
              smurf: [...action.payload]
            };
        case ADD_FAILURE:
            return{
                ...state,
                error: action.payload
            }
      default:
        return state;
    }
  };
  
  export default reducer;