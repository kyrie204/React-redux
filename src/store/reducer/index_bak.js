import {
    combineReducers
} from 'redux'


import {
    REDUX_TEST_MODIFY,
    REDUX_TEST_MORE_REDUCERS
} from '../action/type'

let initState = {
    todos: []
};
let modiSate = {

}

function reducer(state = initState, action) {
    switch (action.type) {
        case REDUX_TEST_MODIFY:
            return {
                ...state, REDUX_TEST: action.payload
            }
        default:
            return {
                ...state, test: 'test'
            }
    }
}

function modiTest(state = modiSate, action) {
    switch (action.type) {
        case REDUX_TEST_MORE_REDUCERS:
            return {
                ...state, REDUX_TEST_MORE_REDUCERS: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    reducer,
    modiTest
}); //每加一个reducer，也就是添加一个function，将新的这个function解构在combineReducers包裹的对象中