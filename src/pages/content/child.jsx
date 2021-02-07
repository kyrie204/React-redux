import React, { Component,useEffect } from 'react';
import { Button, Space } from 'antd';

import Grandson from './grandson'

function Child(props){
    
    const toTop = ()=>{
        props.handle( {value: '我是子组件过来的'} )
    }
    const bridge = (value)=>{
        props.bridge(value)
    }
    return(
        <div>
            <Space direction='vertical'>
                <h2>父组件传过来的值:{props.value}</h2> 
                <Grandson attr={props} bridge={bridge}></Grandson>
                <Button onClick={toTop}>向父组件传值</Button>
            </Space>

        </div>
    )
}

export default Child;