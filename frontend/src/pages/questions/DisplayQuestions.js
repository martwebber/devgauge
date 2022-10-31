import React from 'react';

function DisplayQuestions({quiz, correct_answer, answer}){
    // console.log(quiz)
    // console.log(correct_answer)
    // console.log(answer)
    const answerlist = answer.map((item) => {
        return(
            <ul>
                  <li>{item.answer_content}</li>
            </ul>
        )
    })
    return(
        <div>
            <h4>Questions</h4>
            <div>
                <h5>Question:</h5>
                <p>{quiz}</p>
                <h5>Correct answer:</h5>
                <p>{correct_answer}</p>
                <h5>List of answers:</h5>
                <li>{answerlist}</li>
            </div>
            <hr/>
        </div>
    )
}
export default DisplayQuestions;