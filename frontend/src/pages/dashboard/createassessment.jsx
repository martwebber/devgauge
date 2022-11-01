import React from 'react'
import CreateAssessmentForm from '../assessments/CreateAssessmentForm'

export const CreateAssessment = ({user, setUser}) => {
  return (
    <div>
      <div>Create Assessment</div>
<br/><br/>
      <div>
      <CreateAssessmentForm user={user} setUser={setUser}/>
      </div>
      
    </div>
    
  )
}
