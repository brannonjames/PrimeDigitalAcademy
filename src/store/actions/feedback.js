import {
  ADD_FEELING_RATING,
  ADD_COMMENT,
  ADD_SUPPORTED_RATING,
  ADD_UNDERSTANDING_RATING
} from '../actions/types';

export const addFeelingRating = rating => ({
  type: ADD_FEELING_RATING,
  payload: rating
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

export const addSupportedRating = rating => ({
  type: ADD_SUPPORTED_RATING,
  payload: rating
});

export const addUnderstandingRating = rating => ({
  type: ADD_UNDERSTANDING_RATING,
  payload: rating
});
