import {
  ADD_ALL_FEEDBACK,
  REMOVE_FEEDBACK
} from '../actions/types';

export const addAllFeedback = feedback => ({
  type: ADD_ALL_FEEDBACK,
  payload: feedback
});

export const removeFeedback = id => ({
  type: REMOVE_FEEDBACK,
  payload: id
});