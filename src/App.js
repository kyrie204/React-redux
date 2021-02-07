// import logo from './logo.svg';
import { BrowserRouter as Router  } from 'react-router-dom';

import { routes } from './router';
import { renderRoutes } from 'react-router-config';
import './App.css';

import FrontendAuth  from './FrontendAuth'


// import Login from './login/login.jsx'
// import Home from './home/home.jsx'
function App(props) {
  
  return (
    // <Router>
    //     <div className="App">
    //         <Route exact path='/' component={Login}></Route>
    //         <Route path='/home' component={Home}></Route>
    //     </div>
    // </Router>


    // <FrontendAuth routerConfig={routes} />

    <Router>
      {renderRoutes(routes)}
    </Router>
    // <Router>
    //     <div>
    //       <Switch>
    //         <FrontendAuth routerConfig={routes} />
    //       </Switch>
    //     </div>
    //   </Router>

  );
}

export default App;
