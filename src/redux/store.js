import { createStore } from "redux";
import foodReducer from "./food/foodReducer";

const store = createStore(foodReducer);

export default store;
