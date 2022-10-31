import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function QuestionList(){

    const params = useParams()
    console.log(params)
    const[questionList, setQuestionList]= useState({
        title: "",
        description: "",
        duration: "",
        assessment_type: "",
        questions: [{
            quiz: "",
            correct_answer: "",
            answers: []
        }]
    })
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() =>{
        fetch(`/assessments/${params.assessmentid}`, {
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

               <h1>{questionList.title}</h1>
                <p>{questionList.description}</p>
                <p>{questionList.duration}</p>
                <p>{questionList.assessment_type}</p>
                {questionList.questions.map((item) => {
                    return(
                        <div>
                            <p>{item.quiz}</p>
                            <p>{item.correct_answer}</p>
                            <ul>{item.answers.map((answer) => {
                                 return(<li>{answer.answer_content}</li>)
                            }
                             )}</ul>
                        </div>
                    )
                })}
                
        </div>
      </div>
    )
}
export default QuestionList;