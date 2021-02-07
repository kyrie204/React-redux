import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import reducer from './reducer/index_bak';
import reducer from './reducer/index';


let store = createStore(reducer, applyMiddleware(thunk)); //传入reducer
export default store; //导出仓库