import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Question from "../questions";

function QuizCard({ question, user, questions, correctanswer, setQuestions }) {
  const createdDate = new Date(question.created_at).toLocaleDateString();
  
  const navigate = useNavigate()

  function handleDelete(){
    fetch(`../questions/${question.id}`,{method: "DELETE"})
    .then(res=>{
      if(res.ok){
        res.json().then(()=>{
          const undeletedQuestions = questions.filter(item=>item.id != question.id)
          setQuestions(undeletedQuestions)
          navigate('../questions')

        })
      }else{
        res.json().then(err=>err.errors)
      }
    })
  }
  
  return (
    <div className="question-specific">
      <div className="question-head">
        <div className="first-letter">{question.title}</div>
        <div className="user-date">
          <h4>{user.username}</h4>
          <p>{createdDate}</p>
        </div>
        <div className="question-title">
            <h2>{question.title}</h2>
            <h3>{question}</h3> 
            <h2>{correctanswer}</h2> 

        </div>
      </div>
      
      <div>
        {user && user.id ==question.user.id ? <Link to={`../questions/EditQuestion.js ${question.id}`}><button className="btn btn-primary" type="button">Edit</button></Link> : null  }
        {user && user.id ==question.user.id ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button> : null }
        
        
      </div>
    </div>
  );
}

export default QuizCard;