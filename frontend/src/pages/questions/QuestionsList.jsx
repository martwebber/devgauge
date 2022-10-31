import React, {useEffect, useState} from 'react';
import DisplayQuestions from "./DisplayQuestions"

function QuestionList(){
    const[questionList, setQuestionList]= useState([])
    const userInfo = JSON.parse(localStorage.getItem("token"));

    useEffect(() =>{
        fetch("/questions", {
            headers: {
                Authorization: 'Bearer ' + userInfo.jwt 
              },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setQuestionList(data)
        })
    }, [])
    return(
      <div>
        <p>Display Questions</p>
        <div>
            {
                questionList.map((item) => {
                    return(
                    <DisplayQuestions
                    quiz = {item.quiz}
                    correct_answer= {item.correct_answer}
                    answer = {item.answers}
                    
                    
                    />
                    )
                    
                })
            }
        </div>

      </div>
    )
}
export default QuestionList;