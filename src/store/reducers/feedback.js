import {
  ADD_FEELING_RATING,
  ADD_COMMENT,
  ADD_SUPPORTED_RATING,
  ADD_UNDERSTANDING_RATING
} from '../actions/types';


const initialState = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comments: '',
  flagged: false,
  date: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_FEELING_RATING:
      return state;
    case ADD_UNDERSTANDING_RATING:
      return state;
    case ADD_SUPPORTED_RATING:
      return state;
    case ADD_COMMENT:
      return state;
    default:
      return state;        
  }
}