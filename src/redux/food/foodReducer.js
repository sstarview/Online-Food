import { BUY_FOOD } from "./foodTypes";

const initialState = {
  numOfFoods: 0
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_FOOD:
      return {
        ...state,
        numOfFoods: state.numOfFoods + 1
      };
    default:
      return state;
  }
};

export default foodReducer;
