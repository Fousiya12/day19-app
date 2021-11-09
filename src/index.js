import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dataserve from './components/table';
//import App from './App';
//import Form from './components/student';
//import StateData from './components/student';
//import StateData from './components/studentdata';
//import App1 from './components/app1';
import reportWebVitals from './reportWebVitals';
//import Student from './components/studentdata';
//import StudentInputs from './components/studentinput';

ReactDOM.render(
  <React.StrictMode>
  <Dataserve/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
  <App1/>
  </React.StrictMode>,
  document.getElementById('root')
);*/


/*ReactDOM.render(
  <React.StrictMode>
  <Student/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
  <StateData/>
  </React.StrictMode>,
  document.getElementById('root')
);*/


/*ReactDOM.render(
  <React.StrictMode>
    <StudentInputs/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
