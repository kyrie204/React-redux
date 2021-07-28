import React, { useState, useReducer } from "react";
import { Button, Input, Space } from "antd";

import { reducer, initState } from "./state";

const CustomHooks = () => {
    let initstate = [
        {
            value: 1,
            key: "a",
        },
    ];

    const [test, setTest] = useState(initstate);
    const [val, setVal] = useState("");

    const addItem = () => {
        let data = [
            { key: val, value: Math.floor(Math.random() * 10) },
            ...test,
        ];
        let obj = {};
        let newData = data.reduce((item, next) => {
            if (!obj[next.key]) {
                item.push(next);
                obj[next.key] = true;
            }
            return item;
        }, []);
        setTest(newData);
    };
    const onchange = (e) => {
        setVal(e.target.value);
    };

    // 1
    const [state, dispatch] = useReducer(reducer, initState);

    const modifyState = () => {
        dispatch({
            type: "increment",
            layout: Math.floor(Math.random() * 1000),
        });
    };
    const addTag = () => {
        dispatch({
            type: "addTag",
            layout: { a: 1 },
        });
    };


    return (
        <div>
            <div>
                <h3>自定义hooks 状态管理 Demo</h3>
            </div>

            <Space align="start">
                <div>
                    <Space direction="vertical">
                        <Space>
                            原始状态: <Input value={state.layout} />
                        </Space>
                        <div>
                            <Space>
                                <Button type="primary" onClick={modifyState}>
                                    修改状态
                                </Button>
                                <Button type="primary" onClick={addTag}>
                                    增加字段
                                </Button>
                            </Space>
                        </div>
                    </Space>
                </div>
                <div className="123">
                    <Input value={val} onChange={onchange} />
                    <Button type="primary" onClick={addItem}>
                        add_item
                    </Button>
                    <ol>
                        {test.map((item, i) => (
                            <li key={i}>
                                {item.key}: {item.value}
                            </li>
                        ))}
                    </ol>
                </div>
            </Space>
        </div>
    );
};

export default CustomHooks;
