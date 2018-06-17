import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import surveyField from './surveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields'



class SurveyForm extends Component {
    renderContent = () => {
         return(
            <div>
                {FIELDS.map(({ label, name }, index) => { 
                     return (
                         <div key={index}>
                            <Field label={label} type="text" name={name} component={surveyField}/>
                         </div>
                     )
                })}

            </div>
        )
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderContent()}
                    <Link to='/surveys' className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">arrow_forward</i>
                    </button>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors ={}
    errors.recipients = validateEmails(values.recipients || '')
    FIELDS.forEach(({ name }) => {
        if(!values[name]){
            errors[name] = `You must provide a value for ${name}`
        }
        
    })
    
    return errors;

}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);