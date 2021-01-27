import { combineReducers } from 'redux';
import chatsReducer from './chatReducer';
import profileReducer from './profileReudcer'

const rootReducer = combineReducers ({
    chatsReducer: chatsReducer,
    profileReducer: profileReducer,
});

export default rootReducer;