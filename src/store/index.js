import { createStore, applyMiddleware, compose } from 'redux'
//import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../modules'

export const history = createHistory()
//https://redux.js.org/docs/introduction/LearningResources.html
//https://github.com/reactjs/react-router-redux
//https://github.com/ReactTraining/react-router/blob/v3/docs/Introduction.md#getting-url-parameters
const initialState = {}
const enhancers = []
const middleware = [
  thunk
]
/*
const middleware = [
  thunk,
  routerMiddleware(history)
]
*/

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store