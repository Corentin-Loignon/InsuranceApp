import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import receiptReducer from "./reducers/receiptReducer";

const RootReducers = combineReducers({
  isLogged: loginReducer,
  receipt: receiptReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
