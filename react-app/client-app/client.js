import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import FullPage from './components/common/full-page'

import configureStore from '../redux/configureStore'

const store = configureStore(window.__STATE__)

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={browserHistory}>
      <FullPage />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
