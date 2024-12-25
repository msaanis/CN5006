import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './myGreetingApp'
import GreetingElementwithProp from './mygreetingprop';
import AppColor from './AppbackgroundColor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
<GreetingElementwithProp msg="Hi its Monday"/>
<GreetingElementwithProp msg="Hi its Tuesday"/>
<GreetingElementwithProp msg="Hi its Wednesday"/>
<GreetingElementwithProp msg="Hi its Thursday"/>

<AppColor heading="This is first element" lbl="Name :"
color="green"/>
<AppColor heading="This is second element" lbl="Name :"
color="blue"/>
<AppColor heading="This is third third element" lbl="Name :"
color="Yellow"/>

<App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
