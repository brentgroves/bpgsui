import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../../containers/Home'
import Login from '../../containers/aws/cognito/userpool/login/'
import ConfirmLogin from '../../containers/aws/cognito/userpool/login/confirm/sms/'
import Signup from '../../containers/aws/cognito/userpool/signup/'
import ConfirmSignup from '../../containers/aws/cognito/userpool/signup/confirm'
import GetACode from '../../containers/aws/cognito/userpool/signup/getacode/'
import ChangePassword from '../../containers/ChangePassword'
import NotFound from '../../containers/NotFound'
import ToolCostSummaryByPlant from '../../containers/ToolCostSummaryByPlant'
import Wait from '../../containers/Wait'
import AppliedRoute from '../../components/AppliedRoute'
import ScriptCheck from '../../containers/ScriptCheck'
import ErrorModal from '../../containers/modal/error'
import InfoModal from '../../containers/modal/info'
//Use fragments (React v16.2+ only!) https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag


const PrivateRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route {...rest} render={props => authenticated == false
        ? ( <Redirect to="/login" /> ) : ( <Component {...props} /> )
    } />
)

const PublicRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route {...rest} render={props => authenticated == false
        ? ( <Component {...props} /> ) : (<Redirect to="/login" />)
    } />
)

/*
CHANGE TO A COMPONENT AND ADD componentWillMount(),ETC FUNCTIONS THAT SIGNOUT WHEN LEAVING
AFTER THAT LOOK AT /AUTH/LOGIN.JSX AND MODIFY OUR LOGIN PAGE IF BETTER
*/
const Routes = props => (
<Switch>
  <PublicRoute authenticated={props.authenticated} path='/info' exact component={InfoModal} />
  <PublicRoute authenticated={props.authenticated} path='/error' exact component={ErrorModal} />
  <PublicRoute authenticated={props.authenticated} path='/signup' exact component={Signup} />
  <PublicRoute authenticated={props.authenticated} path='/confirmSignup' exact component={ConfirmSignup} />
  <PublicRoute authenticated={props.authenticated} path='/getACode' exact component={GetACode} />
  <PublicRoute authenticated={props.authenticated} path='/login' exact component={Login} />
  <PrivateRoute authenticated={props.authenticated} path='/info' component={InfoModal} />
  <Route render={() => (<Redirect to="/login" />)} />

</Switch>

  )

  export default Routes

  /*

const Routes = props => (
<Switch>
  {props.authenticated ?
    [

       <Route exact path="/error"  exact component={Login}/>,
        <Route path="/" component={ErrorModal}/>,
        <Route component={NotFound} />
        ]
:
[
        <Route path="/info" component={InfoModal}/>,
        <Route path="/error" component={ErrorModal}/>,
        <Route path="/signup" component={Signup}/>,
        <Route path="/confirm" component={Confirm}/>,
        <Route path="/" component={Login}/>
    ]
      }
  </Switch>

  )


const Routes = props => (
  <Switch>
       <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>

    <AppliedRoute path='/' exact
      component={ Login }/>
    <AppliedRoute path='/wait' exact component={Wait} />
    <AppliedRoute path='/scriptCheck' exact component={ScriptCheck}  />
    <AppliedRoute path='/error' exact component={ErrorModal} />
   <AppliedRoute path='/home' exact component={Home} />
    <AppliedRoute path='/login' exact component={Login} />
    <AppliedRoute path='/signup' exact component={Signup} />
    <AppliedRoute path='/confirm' exact component={Confirm} />
    <AppliedRoute path='/changePassword' exact component={ChangePassword} />
    <AppliedRoute path='/tcsbyplant' exact component={ToolCostSummaryByPlant} />
    <Route component={NotFound} />
  </Switch>
  )

  */