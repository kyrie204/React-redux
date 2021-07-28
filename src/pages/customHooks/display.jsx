import React, { useReducer } from "react";
import { Input, Space } from "antd";
import { reducer, initState } from "./state";
function Display() {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <Space>
                修改的state回显:<Input readOnly value={state.layout}></Input>
            </Space>
        </div>
    );
}
export default Display;
