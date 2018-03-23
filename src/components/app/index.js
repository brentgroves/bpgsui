import React from 'react';
import { Route, Link } from 'react-router-dom'
import TopMenu from '../menu/top'
import LeftSidebar from '../../containers/sidebar/left/'
import PageView from '../../containers/pageview/'
import Login from '../../containers/login/'
import Routes from '../../containers/routes/'

//import './App.css'

    let divStyle = {
      width: '100%',
      height: '100%',
      padding: '0px !important',
      margin: '0px !important'
    }

const App = (props) => (
<div >
  {props.authenticated ?
    [
      <TopMenu />,
      <PageView />
]
:
[
<Routes/>
]}
</div>
)
export default App
/*
const App = (props) => (
<div >
  {props.authenticated ?
    [
      <TopMenu />,
      <PageView />
]
:
[
<Routes/>
]}
</div>
)

const App = (props) => (

      <div className='fullPage' >
  {props.authenticated ?
    [
      <TopMenu />,
      <PageView />
]
:
[
<Routes/>
]}
</div>
)



//https://reacttraining.com/react-router/
//https://reacttraining.com/react-router/web/guides/philosophy
import Home from '../home'
import About from '../about'


  <div>
    <header>
      <TopMenu childProps={childProps}/>
      <MySidebar childProps={childProps} />
    </header>

  </div>


    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>

*/