import React from 'react'
import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi' // permite lançar mais de uma action com um action create
import thunk from 'redux-thunk'

import ReactDOM from 'react-dom' //ele é responsavel por interagir com o DOM
import App from '../src/main/app'
import reducers from '../src/main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise,multi,thunk) // ao identificar uma promisse, ele espera o resultado dela na action
                    (createStore)(reducers, devTools)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, 
    document.getElementById('app'))