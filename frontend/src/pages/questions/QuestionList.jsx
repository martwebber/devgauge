import React, { useEffect, useState } from "react";
import "./Question.css";
import { useParams } from "react-router-dom";

function QuestionList() {
  const params = useParams();
  console.log(params);
  const [questionList, setQuestionList] = useState({
    title: "",
    description: "",
    duration: "",
    assessment_type: "",
    questions: [
      {
        quiz: "",
        correct_answer: "",
        answers: [],
      },
    ],
  });
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    fetch(`/assessments/${params.assessmentid}`, {
      headers: {
        Authorization: "Bearer " + userInfo.jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestionList(data);
      });
  }, []);
  return (
    <div className="listQuestions">
      <h1 className="assessmenttitle">{questionList.title}</h1>
      <div className="items">
        
      <p className="duration"><b>Duration: </b>{questionList.duration}</p>
      <p className="type"> <b>Assessment_type:</b> {questionList.assessment_type}</p>
      </div>
      
      <p className="assessmentbody">{questionList.description}</p>
      
      {questionList.questions.map((item) => {
        return (
          <div>
            <p className= "assessmentquiz">{item.quiz}</p>
            <p className= "assessmentCorrectAnswer"> <b>Correct Answer: </b><i>{item.correct_answer}</i></p>
            <p>Answer: </p>
            <ul>
              {item.answers.map((answer) => {
                return <li className="assessmentAnswer">{answer.answer_content}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
export default QuestionList;
