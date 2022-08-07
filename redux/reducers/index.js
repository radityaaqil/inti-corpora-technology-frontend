import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import detailReducer from "./detailReducer";

const reducers = combineReducers({
  detail: detailReducer,
});

const middlewares = [thunk];

export const store = createStore(reducers, applyMiddleware(...middlewares));
