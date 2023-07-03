// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.scss'
// import App from './App'
// import reportWebVitals from './reportWebVitals'

// ReactDOM.render(<App />, document.getElementById('root'))

// reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import './i18n'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorkerRegistration.register()
reportWebVitals()
