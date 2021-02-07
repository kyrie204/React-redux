import { REDUX_TEST_MODIFY } from './../../action/type'

let initState = {
    todos: []
};

export function reducer(state = initState, action) {
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

