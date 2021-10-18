import React, { Component, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { meauroutes } from '@/router';

import { AppstoreOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';
import './meau.css';
import Item from 'antd/lib/list/Item';
const { SubMenu } = Menu;

function Meau(props) {
  const [defaltActive, setDefaultActive] = useState('/home/meau2');
  const state = {
    collapsed: false,
  };

  const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
  };

  const meauItem = (list) =>
    list.map((item, index) => {
      if (item.children && item.children.length !== 0) {
        return (
          <SubMenu key={index} icon={item.icon} title={item.title}>
            {meauItem(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.path} icon={<PieChartOutlined />}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        );
      }
    });
  useEffect(() => {
    setDefaultActive(() => props.history.location.pathname);
  }, [props.history.location.pathname]);

  return (
    <div className="leftMeau" style={{ width: 220, maxWidth: 220 }}>
      {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
      {/* <Menu
        // defaultSelectedKeys={ [defaltActive] }
        selectedKeys={[defaltActive]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={state.collapsed}
      >
        {meauItem(meauroutes.children)}
      </Menu> */}
      <Menu
        // defaultSelectedKeys={ [defaltActive] }
        selectedKeys={[defaltActive]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={state.collapsed}
      >
        <Menu.Item key="/home/meau1" icon={<PieChartOutlined />}>
          <Link to="/home/meau1">meau1</Link>
        </Menu.Item>
        <Menu.Item key="/home/meau2" icon={<DesktopOutlined />}>
          <Link to="/home/meau2">meau2</Link>
        </Menu.Item>
        <Menu.Item key="/home/content" icon={<ContainerOutlined />}>
          <Link to="/home/content">content</Link>
        </Menu.Item>

        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="fc">
          <Menu.Item key="/home/fc/fc" icon={<ContainerOutlined />}>
            <Link to="/home/fc/fc">fc</Link>
          </Menu.Item>
          <Menu.Item key="/home/fc/class" icon={<ContainerOutlined />}>
            <Link to="/home/fc/class">class</Link>
          </Menu.Item>
          <Menu.Item key="/home/fc/hightlightJS" icon={<ContainerOutlined />}>
            <Link to="/home/fc/hightlightJS">hightlightJS</Link>
          </Menu.Item>
          <Menu.Item key="/home/fc/prismjs" icon={<ContainerOutlined />}>
            <Link to="/home/fc/prismjs">prismjs</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/home/list" icon={<ContainerOutlined />}>
          <Link to="/home/list">list</Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Test">
          <Menu.Item key="/home/customHooks">
            <Link to="/home/customHooks">自定义hooks</Link>
          </Menu.Item>
          <Menu.Item key="/home/display">
            <Link to="/home/display">自定义hooks_display</Link>
          </Menu.Item>
          <Menu.Item key="/home/graph">
            <Link to="/home/graph">Graph</Link>
          </Menu.Item>
          <Menu.Item key="/home/classNames">
            <Link to="/home/classNames">classNames</Link>
          </Menu.Item>
          <Menu.Item key="/home/404">
            <Link to="/home/404">404</Link>
          </Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="/home/formily" icon={<ContainerOutlined />}>
          <Link to="/home/formily">formily</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(Meau);
