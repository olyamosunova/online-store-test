import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import axios from "axios";
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axios))
);

export default store;
