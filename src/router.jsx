// import React, {Component} from 'react';
// import { render } from 'react-dom';

// import One from './component/one.jsx'
// import Two from './component/two.jsx'

// import {
//   HashRouter,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

// const RouterComponent = () => (
//   <HashRouter>
//     <div>	
// 	  <Route exact path="/" component={One} />
// 	  <Route path="/one" component={One} />
// 	  <Route path='/two' component={Two}/>
//     </div>
//   </HashRouter>
// );

// export default RouterComponent;

//=============================================react-router V4.x + 代码分割=======================================================

import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import asyncComponent from './asyncComponent.js'
const One = asyncComponent(() => import(/* webpackChunkName: "chunkOne" */ './component/one.jsx'));
const Two = asyncComponent(() => import(/* webpackChunkName: "chunkTwo" */ './component/two.jsx'));

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/one">One</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/one" component={One}/>
      <Route path="/two" component={Two}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default BasicExample

//=======================================react-router V3.x + 代码分割 ??===================================================

// import React, {Component} from 'react';
// import { render } from 'react-dom';

// import One from './component/one.jsx'

// import {
//   HashRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const Two = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./component/two').default)
//     },'chunk')
// }

// const RouterComponent = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">One</Link></li>
//         <li><Link to="/two">Two</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={One} />
//       <Route path="two" getComponent={Two} />
//     </div>
//   </Router>
// )

// export default RouterComponent

//==========================================V3.x ??========================================

// import React, {Component} from 'react';
// import { render } from 'react-dom';

// import One from './component/one.jsx'
// import Two from './component/two.jsx'
// import { Router, Route, hashHistory } from 'react-router';


// const RouterComponent = () => (
//   <Router history={hashHistory}>
//     <Route path="/" component={One}/>
//   </Router>
// )

// export default RouterComponent