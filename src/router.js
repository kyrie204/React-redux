
import Login from './login/login.jsx'
import Home from './home/home.jsx'
import Meau1 from './pages/meau1/meau1.jsx'
import Meau2 from './pages/meau2/meau2.jsx'

const routes = [
    {
        path: '/',
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
            },
            {
                path: '/home/meau2',
                component: Meau2,
            },
        ]
    },

]




export {routes}