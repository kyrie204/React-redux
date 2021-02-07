
import { REDUX_TEST_MORE_REDUCERS } from '@/store/action/type'
let modiSate = {}

export function modiTest(state = modiSate, action) {
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