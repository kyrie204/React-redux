import { lazy } from 'react'

import Login from './login/login.jsx'
import Home from './home/home.jsx'
import Meau1 from './pages/meau1/meau1.jsx'
import Meau2 from './pages/meau2/meau2.jsx'
import Content from './pages/content/content.jsx'
import List from './pages/list/list.jsx'
import Notfound from '@/pages/404.jsx'
import customHooks from '@/pages/customHooks/customHooks.jsx'
import Display from '@/pages/customHooks/display.jsx'
import Graph from '@/pages/graph/graph.jsx'
import ClassNames from '@/pages/classNames/classNames.jsx'

import Classs from '@/pages/Fc/classs.jsx'
import Fc from '@/pages/Fc/fc.jsx'
import Formily from '@/pages/formily/formily.jsx'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/home',
        component: Home,
        exact: false,
        children:[
            {
                path: '/home/meau1',
                component: Meau1,
                beforeEnter(props) {
                    console.log(props);
                }
            },
            {
                path: '/home/meau2',
                component: Meau2,
            },
            {
                path: '/home/content',
                component: Content,
            },
            {
                path: '/home/list',
                component: List,
            },
            {
                path: '/home/formily',
                component: Formily,
            },
            {
                path: '/home/fc/fc',
                component: Fc,
            },
            {
                path: '/home/fc/class',
                component: Classs,
            },
            {
                path: '/home/customHooks',
                component: customHooks,
            },
            {
                path: '/home/display',
                component: Display,
            },
            {
                path: '/home/graph',
                component: Graph,
                meta: {
                    auth: true
                }
            },
            {
                path: '/home/classNames',
                component: ClassNames,
                meta: {
                    auth: false
                }
            },
            {
                path: '/home/*',
                component: Notfound,
            },
        ]
    },
    {
        path: '*',
        component: Notfound,
        exact: true
    },

]




export {routes}