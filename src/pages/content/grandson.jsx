import React, { Component } from 'react';
import { Button, Space } from 'antd';

function Grandson(props){
    console.log(props.children);
    const toGrand= ()=>{
        props.bridge({value:'我是孙子组件来的数据'})
    }
    return(
        <div>
            <p>孙子组件接收到的数据 {props.attr.value}</p>
            <Button onClick={toGrand}>向爷爷组件传值</Button>
        </div>
    )

}
export default Grandson;