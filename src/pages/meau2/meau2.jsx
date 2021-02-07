import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REDUX_TEST_MODIFY, REDUX_TEST_MORE_REDUCERS } from '@/store/action/type'
import { Input, Space, Button } from 'antd';


function Meau2() {

    let testInput = useRef()

    let state = useSelector((state) => state);
    // console.log(state);

    const dispatch = useDispatch();

    const modify = () => {
        var value = testInput.current.state.value
        dispatch({
            type: REDUX_TEST_MODIFY,
            payload: value
        })
    }
    const moreReducers_modify = () => {
        var value = testInput.current.state.value
        dispatch({
            type: REDUX_TEST_MORE_REDUCERS,
            payload: value
        })
    }
    return (
        <div>
            <Space direction='vertical'>
                <div>meau2</div>
                <div>
                    <Space direction='vertical'>
                        <Input placeholder="redux测试修改" ref={testInput} />
                        <div>
                            <Space>
                                <Button type="primary" onClick={modify}>redux测试修改</Button>
                                <Button type="primary" onClick={moreReducers_modify}>多个reducers redux测试修改</Button>
                            </Space>
                        </div>
                    </Space>
                </div>
            </Space>

        </div>
    )
}

export default Meau2;