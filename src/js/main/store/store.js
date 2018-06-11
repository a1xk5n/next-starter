import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/reducer';
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

function configureStore(initialState) {
    // TODO: default initial state
    const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    store.runSagaTask();
    return store;
}

export default configureStore;
