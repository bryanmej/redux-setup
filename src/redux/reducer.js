import { combineReducers } from "redux";

const INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SUM":
      return {
        count: state.count + 1,
      };
    case "MINUS":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;
