import { INCREMENT, DECREMENT, RESET } from '../actions/index.js';

const initialState = {
  count: 0,
};

const limitCount = num => (num < 0 ? 0 : num);

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: limitCount(state.count + 1),
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      count: limitCount(state.count - 1),
    };
  }
  if (action.type === RESET) {
    return {
      ...state,
      count: 0,
    };
  }
  return state;
};
