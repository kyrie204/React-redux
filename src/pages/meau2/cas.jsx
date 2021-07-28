import { useRef } from "react";
import { Cascader } from "antd";
import "./cas.scss";

const options = [
    {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
            {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                    {
                        value: "xihu",
                        label: "West Lake",
                    },
                ],
            },
        ],
    },
    {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
            {
                value: "nanjing",
                label: "Nanjing",
                children: [
                    {
                        value: "zhonghuamen",
                        label: "Zhong Hua Men",
                    },
                ],
            },
        ],
    },
];

function onChange(value) {
    console.log(value);
}

function Cas() {
    const ref = useRef();

    const change = (e) => {
        if (e) {
            setTimeout(()=>{
                var dom = document.querySelectorAll('.ant-cascader-menu')[0]
                console.log(dom);
                console.log(dom && dom.offsetWidth);
            },0)
        }
    };

    return (
        <div className="wrap">
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
                ref={ref}
                onPopupVisibleChange={change}
            />
        </div>
    );
}

export default Cas;
