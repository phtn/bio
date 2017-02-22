import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
/*import Admin from './Admin'*/
import Main from './components/main'
import './index.css'


const store = createStore(reducers)
 



render(
	<Provider store={store}>
	<Router history={ browserHistory }>
		<Route path='/' component={ App } />
		<Route path='/main' component={ Main } />
	</Router>
	</Provider>,
  document.getElementById('root')
)
