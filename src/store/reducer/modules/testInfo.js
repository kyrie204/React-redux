import {
    REDUX_TEST_MORE_REDUCERS_
} from './../../action/type'

let info = {
    baseInfo: '个人基本信息module123123'
};

function testInfo(state = info, action) {
    switch (action.type) {
        case REDUX_TEST_MORE_REDUCERS_:
            return {
                ...state,
                //其他操作
            };
        default:
            return {
                ...state
            }
    }

}

export default testInfo