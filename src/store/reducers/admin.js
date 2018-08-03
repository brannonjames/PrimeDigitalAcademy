import {
  ADD_ALL_FEEDBACK,
  REMOVE_FEEDBACK
} from '../actions/types';

const initialState = {
  feedback: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_ALL_FEEDBACK:
      return state;
    case REMOVE_FEEDBACK:
      return state;
    default:
      return state;    
  }
}