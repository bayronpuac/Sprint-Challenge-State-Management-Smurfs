import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    smur: [],
    isFetching: false,
    error: ' ', 
    smurfList: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
        },
        {
            name: "Sleepy",
            age: 200,
            height: "5cm",
            id: 1
        }
    ]
}

    

  const reducer = (state = initialState, action) => {
    console.log(initialState.smurfList, 'smur')
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SUCCESS:
          console.log(action.payload)
        return {
          ...state,
          isFetching: false,
          error: '',
          smur: action.payload
        };
      case FETCH_FAILURE:
        return {
          ...state,
          error: action.payload,
          
          isFetching: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;