import React, { useState } from "react";
import { Checkbox, Card, Space, Button } from "antd";
import classnames from "classnames";
import "./classNames.scss";

function ClassNames() {
    const [checked, setCheacked] = useState(false);
    const [col, setcol] = useState("#000");
    const [col2, setcol2] = useState("#aaa");
    const checkboxOnChange = (e) => {
        setCheacked(e.target.checked);
    };
    function color16() {
        //十六进制颜色随机
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
        return color;
    }
    const chanceToColor = (e) => {
        //rgb颜色随机
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var rgb = "rgb(" + r + "," + g + "," + b + ")";
        setcol(rgb);
        setcol2(color16());
    };
    return (
        <div>
            <Space direction="vertical">
                <Card
                    title="React-classnames Demo"
                    style={{ width: 600, margin: "auto" }}
                >
                    <div>
                        <h3
                            className={classnames({
                                f50: checked,
                                defult: !checked,
                            })}
                        >
                            我的字体可以变颜色
                        </h3>
                        <Checkbox onChange={checkboxOnChange}>
                            改变颜色
                        </Checkbox>
                    </div>
                </Card>
                <Card
                    title="React-classnames Demo"
                    style={{ width: 600, margin: "auto" }}
                >
                    <div>
                        <h3 style={{ color: col }}>
                            我的字体可以变颜色 rgb颜色随机 <code>{col}</code>
                        </h3>
                        <h3 style={{ color: col2 }}>
                            我的字体可以变颜色 十六进制颜色随机 <code>{col2}</code>
                        </h3>
                        <Button type="primary" onClick={chanceToColor}>
                            改变颜色
                        </Button>
                    </div>
                </Card>
            </Space>
        </div>
    );
}

export default ClassNames;
