import React, {useState, useEffect} from 'react';

function StudentPostAnswer(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userID= userInfo.user.id

    const[postAnswer, setPostAnswer]= useState({
        assessment_id: "",
        question_id: "",
        answer_id: "",
        user_id: userID,
        scores: 0

    })
    
    useEffect(() => {
        fetch("/student_answers",{
            method: "POST",
            headers: {
                "Content-Type": "application",
                Authorization: "Bearer " + userInfo.jwt,
            },
            body: JSON.stringify(postAnswer)

        })
    })
    return(
        <div>
            
        </div>
    )
}
export default StudentPostAnswer;