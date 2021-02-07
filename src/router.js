
import Login from './login/login.jsx'
import Home from './home/home.jsx'
import Meau1 from './pages/meau1/meau1.jsx'
import Meau2 from './pages/meau2/meau2.jsx'
import Content from './pages/content/content.jsx'
import List from './pages/list/list.jsx'
import Notfound from '@/pages/404.jsx'

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