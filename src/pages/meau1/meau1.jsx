import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Input, Space, Button } from "antd";

const Meau1 = () => {
    const [title, setTitle] = useState("默认的meau123");
    let [time, setTime] = useState(new Date());
    const store = useSelector((state) => state);
    let [clearTime, setClearTime] = useState(null);

    const go = () => {
        clearTime = setInterval(() => {
            setTime(() => (time = new Date()));
        }, 1000);
        return clearTime;
    };
    const clear = (s) => {
        setClearTime(() => {
            window.clearInterval(clearTime);
        });
    };
    const start = () => {
        setClearTime(go());
    };
    useEffect(() => {
        start();
        return () => {
            clear();
        };
    }, []);

    return (
        <div>
            <Space direction="vertical">
                <span>meau1,显示meau2修改的全局数据测试</span>
                <Input value={store.reducer.REDUX_TEST}></Input>
                <span>多个reducers redux测试修改</span>
                <Input value={store.modiTest.REDUX_TEST_MORE_REDUCERS}></Input>
                <span>多个reducers redux测试修改 个人基本信息第三个module</span>
                <Input readOnly value={store.testInfo.baseInfo}></Input>
            </Space>
            <div style={{ marginTop: 8 + "px" }}>
                <Space>
                    时间测试: {time.toLocaleTimeString('chinese',{hour12:false})}
                    <Space>
                        <Button type="primary" onClick={clear}>
                            暂停
                        </Button>
                        <Button type="primary" onClick={start}>
                            开始
                        </Button>
                    </Space>
                </Space>
            </div>
        </div>
    );
};

export default Meau1;
