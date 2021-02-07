import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

import "./home.scss";
import Top from "./../pages/top/top";
import Meau from "./../pages/leftMeau/meau";
// import Content  from "./../pages/content/content";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: props.route,
        };
    }
    render() {
        const route = this.state.route;
        window.router = this.props.history;
        return (
            <div>
                <Top></Top>
                <div className="contentBody">
                    <Meau></Meau>
                    {renderRoutes(route.children)}
                </div>
            </div>
        );
    }
}

export default home;
