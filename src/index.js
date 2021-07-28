import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@formily/antd/dist/antd.css';
import 'antd/dist/antd.css';

// import Login from './login/login.jsx'
import FirstScreen from './FirstScreen/FirstScreen.jsx'


import { Provider } from 'react-redux';
import store from './store/index';

function listen () {
  if (document.readyState == 'complete') { // 资源加载完成
    ReactDOM.render(
      // <React.StrictMode>
        // {/* <Login></Login> */}
        <Provider store={store}>
          <App/>
        </Provider>,
      // </React.StrictMode>,
      document.getElementById('root')
    );
  } else { // 资源加载中
      ReactDOM.render(
          <Provider store={store}>
              <Router>
                  <Route path="/" component={FirstScreen}/>
              </Router>
          </Provider>,
          document.getElementById('root')
      )
  }
}
// ReactDOM.render(
//   // <React.StrictMode>
//     // {/* <Login></Login> */}
//     <Provider store={store}>
//       <App/>
//     </Provider>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

document.onreadystatechange = listen

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
