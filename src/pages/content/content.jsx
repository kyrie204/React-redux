import React, { useState, useEffect, useRef } from "react";
import { Button, Space } from "antd";
import Child from "./child";
// class content extends Component {
//     render() {
//         return (
//             <div>
//                 content
//             </div>
//         );
//     }
// }

function Content() {
    let [count, setCount] = useState(0);
    let [num, setNum] = useState(0);

    const numRef = useRef(count);

    // useEffect(() => {
    //     console.log(`clicked ${count}`);
    // });

    // 传入[]参数，只执行一次
    // useEffect(() => {
    //   console.log(`clicked ${count} []`);
    // }, []);

    // 监控count变化，一旦变化立即执行
    useEffect(() => {
        console.log(`count: ${count} num: ${num}`);
    }, [count, num]);

    // //会记录每一个的值
    // useEffect(() => {
    //     numRef.current = count
    // }, [count])

    // 数据解绑销毁
    // useEffect(() => {
    //   console.log(`我来了...`);
    //   return () => {
    //     console.log(`我走了...`);
    //   }
    // }, []);

    // function increment(){
    //     setCount(count+1)
    // }

    const increment = () => {
        setCount(count + 1);
    };
    const receive = (layout) => {
        console.log(layout);
    };
    const grandson = (layout) => {
        console.log(layout);
    };
    const give = (s) => {
        return () => {
            console.log(s);
        };
    };
    const give2 = (s) => {
        console.log(s);
    };
    return (
        <div>
            <Space>
                <Space direction="vertical">
                    <p>you click count {count} times;</p>
                    <p>you click num {num} times;</p>
                    <h2>值 numRef:{numRef.current}</h2>

                    <Child
                        value={count}
                        handle={receive}
                        bridge={grandson}
                    ></Child>
                    <Space>
                        <Button onClick={increment}>add</Button>
                        <Button
                            onClick={() =>
                                setCount(count == 0 ? count : count - 1)
                            }
                        >
                            decre
                        </Button>
                        <Button onClick={() => setNum(num + 1)}>num++</Button>
                    </Space>
                </Space>
                <Space>
                    <Button onClick={give("123")}>123</Button>
                    <Button
                        onClick={() => {
                            give2(222);
                        }}
                    >
                        456
                    </Button>
                    <Button>789</Button>
                </Space>
            </Space>
        </div>
    );
}

export default Content;
