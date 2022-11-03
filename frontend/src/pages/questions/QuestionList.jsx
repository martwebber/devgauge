import React, { useEffect, useState } from "react";
import "./Question.css";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import CreateNewQuestionForm from "./CreateNewQuestionForm";

function QuestionList() {

    const history = useNavigate();

    function handleClick (path){
      history(path)
  
    }
  const params = useParams();
  // console.log('params',params);
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


  const [hide, setHide] = React.useState(true)

  const toggleElements = () =>{
    setHide((hide)=>!hide)
    console.log(hide,hideClass)

  }

  const hideClass = hide? 'hidden' :'';


  return (
    <div className="listQuestions">
      <h1 className="assessmenttitle">{questionList.title}</h1>
      <div className="items">
        
      <p className="duration"><b>Duration: </b>{questionList.duration}</p>
      <p className="type"> <b>Assessment_type:</b> {questionList.assessment_type}</p>
      </div>
      
      <p className="assessmentbody">{questionList.description}</p>
      
      <ol>
      {questionList.questions.map((item) => {
        return (
          <div>
            <li className= "assessmentquiz">{item.quiz}</li>
            <p className= "assessmentCorrectAnswer"> <b>Correct Answer: </b><i>{item.correct_answer}</i></p>
            <p>Options: </p>
            <ul>
              {item.answers.map((answer) => {
                return <li className="assessmentAnswer">{answer.answer_content}</li>;
              })}
            </ul><br/>
          </div>
        );
      })}
      </ol>
      <div> 
        <button onClick={() => handleClick("/assessments")} style={{backgroundColor: "blue", borderRadius: 15 + "px"}} >Back</button>

        <button onClick={toggleElements} style={{backgroundColor: "blue", borderRadius: 15 + "px"}} >Add Question</button>
      </div>

<div className={hideClass}>
  <CreateNewQuestionForm/>
</div>
    </div>
  );
}
export default QuestionList;