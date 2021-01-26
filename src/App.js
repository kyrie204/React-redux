// import logo from './logo.svg';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import { routes } from './router';
import { renderRoutes } from 'react-router-config';
import './App.css';


// import Login from './login/login.jsx'
// import Home from './home/home.jsx'
function App() {
  return (
    // <Router>
    //     <div className="App">
    //         <Route exact path='/' component={Login}></Route>
    //         <Route path='/home' component={Home}></Route>
    //     </div>
    // </Router>
    <Router>
      {renderRoutes(routes)}
    </Router>

  );
}

export default App;
