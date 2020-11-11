import { combineReducers } from 'redux';
import { voterReducer } from "./VoterReducer"

export const rootReducer = combineReducers ({
    voterReducer,
})
