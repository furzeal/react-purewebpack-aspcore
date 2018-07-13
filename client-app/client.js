import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/hello'

console.log(document.getElementById('app'))
ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('app'),
)
