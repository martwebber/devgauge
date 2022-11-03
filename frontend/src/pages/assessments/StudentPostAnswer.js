import React, {useState, useEffect} from 'react';

function StudentPostAnswer({assessmentid, correctAnswer, questionid, selectAnswer, setSelectAnswer}){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userID= userInfo.user.id
    // const [isTrue, setIsTrue] = useState(correctAnswer)
    console.log(correctAnswer)
    
    
 function handleSubmit(e){
    console.log(questionid)
    // console.log(postAnswer)
    e.preventDefault();
    fetch("/student_answers",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userInfo.jwt,
        },
        body: JSON.stringify({
            assessment_id: assessmentid,
            question_id: questionid,
            answer_id: selectAnswer,
            user_id: userID,
            scores: 0
        })

    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        // setPostAnswer(data)
        if(selectAnswer.toLowerCase() === correctAnswer.toLowerCase()){
            alert("Correct Answer")
        }
        else{
            alert("Invalid Answer")
        }

    })

    

 }

 


        

    return(
        <div> 
            
          <button onClick={handleSubmit} type="submit">Save</button>
        </div>
    )
}
export default StudentPostAnswer;