import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import App from './app'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
ReactGA.initialize('UA-148481383-1')
ReactGA.pageview(window.location.pathname + window.location.search)
