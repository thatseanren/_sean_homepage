import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Avatar from './component/avatar'
import MenuBtn from './component/menubtn'
// cons3ole.log(this)//undefined
console.log(Avatar)
ReactDOM.render(<Avatar />, document.getElementsByClassName('component-avatar')[0]);
ReactDOM.render(<MenuBtn />, document.getElementById('btn'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
