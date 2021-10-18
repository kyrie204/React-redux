import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// import reducer from './reducer/index_bak';
import reducer from './reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
// let store = createStore(reducer, applyMiddleware(thunk)); //传入reducer
export default store; //导出仓库