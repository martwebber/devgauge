import React from 'react'
import TMDashBoard from '../dashboard/TMDashBoard'
import CreateNewQuestionForm from '../questions/CreateNewQuestionForm'
import CreateAssessmentForm from './CreateAssessmentForm'

export const Assessments = () => {
  return (
    <div>
      <div>Assessments</div>
      <div>
      <CreateNewQuestionForm/>
      </div><br/><br/>
      <div>
      <CreateAssessmentForm />
      </div>
      <div>
      <TMDashBoard />
      </div>
      
      
    </div>
    
  )
}
