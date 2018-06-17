import authReducer from './authReducer'
import { reducer as reduxForm } from 'redux-form'
import { combineReducers } from 'redux'

export default combineReducers ({
    auth: authReducer,
    form: reduxForm
})