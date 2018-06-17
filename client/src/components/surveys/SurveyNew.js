import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import SurveyReviewForm from './SurveyReviewForm'

class SurveyNew extends Component {
    constructor(props){
        super(props)
        this.state = { showReviewForm: false }
    }

    onSurveySubmit = () => {
        this.setState({ showReviewForm: true })
    }

    onPrevious = () => {
        this.setState({ showReviewForm: false })
    }

    renderContent() {
        if(this.state.showReviewForm){
            return <SurveyReviewForm onPrevious={this.onPrevious}/>
        }
        return <SurveyForm onSurveySubmit={this.onSurveySubmit} />
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default SurveyNew;