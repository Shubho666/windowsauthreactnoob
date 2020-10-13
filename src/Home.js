import { render } from '@testing-library/react';
import React from 'react'
import Authenticate from './Authenticate'

//const {REACT_A,REACT_APP_ALLOWED_USERSS} = process.env;
const abc=()=> {
    return ( <p>bc</p>);
}

const usernamesss = require('username');
 


var os = require('os');
const oss = () => { return (os.userInfo());}
//var name = (currentUser.​get_loginName()).split("\\")[1];

const  Home= (props)=> {
    console.log(2)
  return (
    <div>
      <h1>Home...{process.env.REACT_APP_A}....{oss.username}...</h1>
      <p>{usernamesss.sync()}...</p>
      {Authenticate()}...
      {abc()}
      {localStorage.getItem("CurUser")};
      <p>asdsfsdf</p>
    </div>
  )
}

export default Home