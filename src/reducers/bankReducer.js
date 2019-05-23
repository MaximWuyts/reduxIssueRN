import { ACCOUNTS_SET } from '../actions/actionTypes';

const initialState = {
    accountArray: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNTS_SET:
            console.log('hello');
            return { ...state, accountArray: action.payload }
        default:
            return state;
    }
}