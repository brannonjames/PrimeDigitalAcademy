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
      return { feedback: action.payload };
    case REMOVE_FEEDBACK:
      return {
        feedback: state.feedback.filter(feedback => {
          return feedback.id !== action.payload;
        })
      };
    default:
      return state;    
  }
}