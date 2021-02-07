import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Form, Input, Button, Checkbox, Card } from "antd";

import "./login.css";
import { useSelector } from "react-redux";

function Login(props) {
    let history = useHistory();
    let state = {
        layout: {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        },
        tailLayout: {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        },
    };

    const onFinish = (values) => {
        console.log("Success:", values);
        // props.history.push('/home') //withrouter
        history.push("/home");
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="wrapper">
            <Card title="login" style={{ width: 450 }} bordered={false}>
                <Form
                    {...state.layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        {...state.tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...state.tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

// export default withRouter(Login);
export default Login;
