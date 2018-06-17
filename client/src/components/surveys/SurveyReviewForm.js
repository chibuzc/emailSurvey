import React from 'react'
import { connect } from 'react-redux'
import FIELDS from './formFields'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

const SurveyReviewForm = ({ onPrevious, formValues, submitSurvey, history }) =>  {
    return (
        <div>
            <h5> SURVEY REVIEW FORM </h5>
            <div>
                {FIELDS.map(({ label, name }) => {
                    return <div>
                                <label>{label}</label>
                                <div>{formValues[name]}</div>
                           </div>
                })}
            </div>
            <button className="yellow darken-3 btn-flat white-text" onClick={onPrevious} > Back </button>
            <button className="green btn-flat right white-text" onClick={()=>submitSurvey(formValues, history)}>
                <i className="material-icons right">email</i>    
                Submit
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReviewForm))