import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { navMenuButtonReducer } from "./ducks/navMenuButtonDucks";
//compose enhancer
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//allReducers
export const allReducers = combineReducers({
  navMenuButton: navMenuButtonReducer,
});
//store
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
