import React from 'react'
import CreateAssessmentForm from '../assessments/CreateAssessmentForm'

export const CreateAssessment = ({user, setUser}) => {
  return (
    <div>
      <h3 style={{textAlign: "center", paddingTop: "10px"}}>Create Assessment</h3>
      <div>
      <CreateAssessmentForm user={user} setUser={setUser}/>
      </div>
      
    </div>
    
  )
}
