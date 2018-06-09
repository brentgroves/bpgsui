import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TopMenu from '../../containers/menu/top/';
import LeftSidebar from '../../containers/sidebar/left/';
import PageView from '../../containers/pageview/';
import Routes from '../../containers/routes/';
import Amplify, { Auth, API } from 'aws-amplify';
import aws_exports from '../../aws-exports';

//import './App.css'

let divStyle = {
  width: '100%',
  height: '100%',
  padding: '0px !important',
  margin: '0px !important'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.state = { authStatus: this.props.authenticated || false };

    Amplify.configure(aws_exports);
  }

  handleWindowClose = async e => {
    e.preventDefault();
    Auth.signOut()
      .then(
        sessionStorage.setItem('isLoggedIn', false),
        console.log('authenticated')
      )
      .catch(err => console.log(err));
  };

  componentWillMount() {
    this.validateUserSession();
    window.addEventListener('beforeunload', this.handleWindowClose);
  }

  componentWillUnMount() {
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }

  validateUserSession() {
    let checkIfLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (checkIfLoggedIn === 'true') {
      this.setState(() => {
        return {
          authStatus: true
        };
      });
    } else {
      this.setState(() => {
        return {
          authStatus: false
        };
      });
    }
  }

  render() {
    return (
      <div>
        <TopMenu />,
        {this.props.authenticated ? [<PageView />] : [<Routes />]}
      </div>
    );
  }
}

//export default App

/*
const App = (props) => (
<div >
      <TopMenu />,

  {props.authenticated ?
    [
      <PageView />
]
:
[
<Routes/>
]}
</div>
)
export default App
*/

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
