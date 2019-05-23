import { combineReducers } from "redux";
import bankReducer from './bankReducer';

export default combineReducers({
    bankReducer: bankReducer,
})