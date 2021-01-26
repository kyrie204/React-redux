import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import Top  from "./../pages/top/top";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: props.route,
        }
    }
    render() {
        const route = this.state.route;
        return (
            <div>
                <Top></Top>
                

                {/* {renderRoutes(route.children)} */}
            </div>
        );
    }
}

export default home;