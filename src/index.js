import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import './index.css'


 



render(
	<Router history={ browserHistory }>
		<Route path='/' component={ App } />
	</Router>,
  document.getElementById('root')
)
