import { combineReducers } from "redux";

const INITIAL_STATE = {
  text: "hello from redux",
};

const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  text: textReducer,
});

export default rootReducer;
