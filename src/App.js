//import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>sample page</h1>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Unauth from './Unauth';
import Authenticate from './Authenticate';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//         {this.props.children}
//       </div>
//     );
//   }
// }
const rightpage = (param) => {
  if(Authenticate()=='true')
  {
    return param;
  }
  return Unauth;
}
class App extends React.Component {
  render() {
    localStorage.setItem("CurUser","rc25402");
    return (
      <Router>
        <ul>
          <li>
            <Link to={{pathname:'/',abt:{
              namess:'this is some name'
            }}}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>
        <Switch>
          <Route path="/" exact component={rightpage(Home)} />
          <Route path="/about" exact component={rightpage(About)} />
          <Route path="/unauth" exact component={Unauth} />
          
        </Switch>
        {this.props.children}
      </Router>
    );
  }
}
export default App;

// export class Home extends React.Component {
//   componentDidMount()
//   {
//     console.log('2');
//   }
//   render() {
//     console.log(process.env.ALLOWED_USERS);
//     console.log(2);
//     return (
//       <div>
//         <h1>Home...</h1>
//       </div>
//     );
//   }
// }
// //export default Home;

// export class About extends React.Component {
//   componentDidMount() {
//     console.log(2);
//   }
//   render() {
//     console.log(process.env.ALLOWED_USERS);
//     console.log(2);
//     return (
//       <div>
//         <h1>About...</h1>
//       </div>
//     );
//   }
// }
// //export default About;

// export class Contact extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Contact...</h1>
//       </div>
//     );
//   }
// }
// //export default Contact;