import { combineReducers } from 'redux'

import { reducer } from './modules/reduces'
import { modiTest } from './modules/modiTest'
import testInfo from './modules/testInfo'


export default combineReducers({
    reducer,
    modiTest,
    testInfo
})