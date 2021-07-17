import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import repoReducer from "./repoReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  repositories: repoReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
