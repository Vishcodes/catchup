import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './redux/store/configureStore'
import { Provider } from 'react-redux'
import { StartSetUser } from './redux/actions/authAction'
// import { withRouter } from 'react-router-dom'

// import './index.css'

import App from './App'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

if(localStorage.getItem('user-auth')){
    store.dispatch(StartSetUser())
}

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'))
