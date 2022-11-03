# frozen_string_literal: true

class StudentAnswersController < ApplicationController
  def index
    student_answers = StudentAnswer.all
    render json: student_answers
  end

  def create
    jwt_data = decoded_token
    user = User.find(jwt_data[0]["user_id"]) 
    student_answer = user.student_answers.create(params_create)
    render json: student_answer
  end
  
  private
    def params_create
      params.permit(:question_id, :answer_id, :scores, :user_id, :assessment_id)
    end
end
