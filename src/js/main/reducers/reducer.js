import { handleActions } from 'redux-actions';
import * as Actions from '../actions/actions';

export const exampleInitialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null,
};

export default handleActions(
    {
        [Actions.failure]: (state, action) => ({
            ...state,
            error: action.payloaderror,
        }),
        [Actions.increment]: state => ({
            ...state,
            count: state.count + 1,
        }),
        [Actions.decrement]: state => ({
            ...state,
            count: state.count - 1,
        }),

        [Actions.reset]: state => ({
            ...state,
            count: exampleInitialState.count,
        }),

        [Actions.loadDataSuccess]: (state, action) => ({
            ...state,
            placeholderData: action.payload.data,
        }),
    },
    exampleInitialState,
);
