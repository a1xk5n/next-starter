import { createAction } from 'redux-actions';

export const failure = createAction('FAILURE', error => ({ error }));

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const reset = createAction('RESET');

export const loadData = createAction('LOAD_DATA');

export const loadDataSuccess = createAction('LOAD_DATA_SUCCESS', data => ({ data }));
