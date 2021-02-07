import { Result, Button } from 'antd';
import React from 'react';

function Notfound(props) {
    const jumpToIndex = ()=>{
        props.history.push('/home/meau1')
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={jumpToIndex} >Back Home</Button>}
        />
    )
}
export default Notfound