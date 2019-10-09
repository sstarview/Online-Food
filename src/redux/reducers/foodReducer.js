import { FOOD_UPDATE } from "../actions/foodActions";

export default function foodReducer(state = 0, { type, payload }) {
  switch (type) {
    case FOOD_UPDATE:
      return payload.total;
    default:
      return state;
  }
}
