import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import FullPage from './components/common/full-page'

ReactDOM.hydrate(
  <Router history={browserHistory}>
    <FullPage />
  </Router>,
  document.getElementById('app'),
)
