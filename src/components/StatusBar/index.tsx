import React from 'react';
import Left from './Left'
import Center from './Center'
import Right from './Right'
import './style.css'

const StatusBar = ()=>{
   return (
      <div id="status-bar">
        <Left />
        <Center />
        <Right />
      </div>
   )
}
export default StatusBar;
