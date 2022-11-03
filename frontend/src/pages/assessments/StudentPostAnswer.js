import React, { useState } from 'react';

function StudentPostAnswer({assessmentid, answerid, questionid, selectAnswer, setSelectAnswer}){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userID= userInfo.user.id
    

    const[postAnswer, setPostAnswer]= useState({
        assessment_id: assessmentid,
        question_id: questionid,
        answer_id: selectAnswer,
        user_id: userID,
        scores: 0

    })
    
 function handleSubmit(e){
    console.log(postAnswer)
    e.preventDefault();
    fetch("/student_answers",{
        method: "POST",
        headers: {
            "Content-Type": "application",
            Authorization: "Bearer " + userInfo.jwt,
        },
        body: JSON.stringify(postAnswer)

    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

    })

 }
        
    return(
        <div>
          <button onClick={handleSubmit} type="submit">Save</button>
        </div>
    )
}
export default StudentPostAnswer;