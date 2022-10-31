import React from 'react';

function DeleteAssessement({assessmentid, assessment, setAssessment}){

    function handleDeleteClick(){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        fetch(`/assessments/${assessmentid}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + userInfo.jwt 
              }
        })
        .then((res) => res.json())
        .then(() => {
            let findassessment = assessment.filter((item) => item.id !== assessmentid)
            // console.log(findassessment)
            setAssessment(findassessment)
        })
    }
    return(
        <div>
            <button onClick={handleDeleteClick} style={{backgroundColor: "orangered", borderRadius: 15 + "px"}} >Delete</button>
        </div>

    )
}
export default DeleteAssessement