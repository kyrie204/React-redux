import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import logo from './../../logo.svg';

import { Avatar, Menu, Dropdown, Modal } from 'antd';
import "./top.scss";

class top extends Component {
    constructor(props){
        super(props)
        this.state={
            isModalVisible: false
        }
    }
    
    handleMenuClick = (e) => {
        if (e.key === 'logout') this.props.history.push('/login')
        if (e.key === '1') {
            this.setState({ isModalVisible: true })
        }
    }
    handleOk = ()=>{
        this.setState({ isModalVisible: false })
    }
    handleCancel = ()=>{
        this.setState({ isModalVisible: false })
    }
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key='1'>
                    <span>about</span>
                </Menu.Item>
                <Menu.Item key='logout'>
                    <span>logout</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="headerTop">
                <div>
                    <p></p>
                    <h3>Test React</h3>
                </div>
                <div>
                    <div>
                        <Dropdown overlay={menu}>
                            <Avatar size={40} src={logo} />
                        </Dropdown>
                    </div>
                </div>
                <Modal title="事例弹框" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default withRouter(top);