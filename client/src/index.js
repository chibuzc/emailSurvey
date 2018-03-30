import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import reducers from './Reducers'
import App from './components/app'
import reduxThunk from 'redux-thunk'

const store = createStore ( reducers, {}, applyMiddleware(reduxThunk) )

ReactDOM.render(
     <Provider store={store}><App /></Provider>,
    document.getElementById('root')
 )


 console.log('STRIPE KEY IS '+ process.env.REACT_APP_STRIPE_KEY)
 console.log('ENVIRONMENT IS ' + process.env.NODE_ENV)
 console.log('process '+ process.env)
