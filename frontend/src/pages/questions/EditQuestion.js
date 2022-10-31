import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditQuestion({ questions, setQuestions }) {
  const [errors, setErrors] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState({
    id: 0,
    quiz: "",
    topic_id: 0,
    correct_answer: "",
    created_at: "",
    
    
  });

  useEffect(() => {
    fetch(`../questions${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setQuestion(data)
      }
        );
  }, [params.id]);

  const [updateData, setUpdateData] = useState({
    quiz: question.quiz,
    topic_id: question.topic_id,
    correct_answer: question.correct_answer,
  });

  useEffect(()=>{
    setUpdateData({
        quiz: question.quiz,
        topic_id: question.topic_id,
    correct_answer: question.correct_answer,
      
    })
  },[question])

  // console.log(updateData)
  

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setUpdateData({ [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`../questions${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const updatedQuestions = questions.map((item) => {
            if (item.id == data.id) {
              return data;
            } else {
              return item;
            }
          });

          setQuestions(updatedQuestions);
          navigate("../questions");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="form-div">
      <div>
        <h2>Edit your Question</h2>
      </div>

      <form className="row g-3" id="quiz-form" onSubmit={handleSubmit}>
        <div>
          {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="quiz" className="form-label">
            Enter Question
          </label>
          <input
            type="text"
            className="form-control"
            id="quiz"
            name="quiz"
            placeholder="Enter a question"
            value={updateData.quiz}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="topic_id" className="form-label">
            Topic ID
          </label>
          <input
            type="number"
            className="form-control"
            id="topic_id" 
            name="topic_id"
            placeholder="Enter topic Id..."
            value={updateData.topic_id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Correct Answer
          </label>
          <input
            className="form-control"
            id="correct_answer"
            name="correct_answer"
            rows="3"
            value={updateData.correct_answer}
            onChange={handleChange}
          />
        </div>
        <input type={"submit"} value="Update" />
      </form>
    </div>
  );
}

export default EditQuestion;;
